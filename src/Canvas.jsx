import { useEffect, useRef } from 'react';
import images from './image';
import gsap from 'gsap';
import ScrollElement from './../node_modules/locomotive-scroll/dist/types/core/ScrollElement.d';

function Canvas({ details }) {
  const { startIndex , numImages, duration, top, size, left, zIndex } = details;
  const canvasRef = useRef(null);
  const indexRef = useRef({ value: startIndex }); // Use ref to track the index continuously without triggering re-renders

  useEffect(() => {
    // Initialize gsap animation with infinite repeat
    const animation = gsap.to(indexRef.current, {
      value: startIndex + numImages - 1,
      duration: duration,
      ease: "linear",
      repeat: -1, // Infinite repeat
      onUpdate: renderImage, // Call renderImage function to update canvas
    });

    function renderImage() {
      const scale = window.devicePixelRatio;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      const currentIndex = Math.round(indexRef.current.value); // Get rounded index

      img.src = images[currentIndex];
      img.onload = () => {
        canvas.width = canvas.offsetWidth * scale;
        canvas.height = canvas.offsetHeight * scale;
        canvas.style.width = canvas.offsetWidth + "px";
        canvas.style.height = canvas.offsetHeight + "px";

        ctx.scale(scale, scale);
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing
        ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
      };
    }

    // Clean up on component unmount
    return () => {
      animation.kill();
    };
  }, []); // Empty dependency array to run only on mount

  return (
    <canvas
    data-ScrollElement
    data-scroll-speed={Math.random().toFixed(1)}
      ref={canvasRef}
      className="absolute"
      style={{
        width: `${size*1.4}px`, 
        height: `${size*1.4}px`,
        top: `${top}%`,
        left: `${left}%`,
        zIndex: `${zIndex}`,
      }}
      id="canvas"
    />
  );
}

export default Canvas;
