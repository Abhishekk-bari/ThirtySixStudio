// import React, { useLayoutEffect, useReducer, useRef } from 'react'
// import bg from '../../assets/bgsea.jpg'
// import img2 from '../../assets/img2.jpg'
// import img3 from '../../assets/img3.jpg'
// import img4 from '../../assets/img4.jpg'
// import img5 from '../../assets/img5.jpg'
// import {gsap} from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);


// function About() {
//     const bg1 = useRef(null)
//     const img_container = useRef(null)
//     const img = useRef(null)
//     const text1 = useRef(null)
//     const text2 = useRef(null)
//     const container = useRef(null)


//     useLayoutEffect(() => {
//         let ctx = gsap.context(() => {
//             ScrollTrigger.create({
//                 trigger: bg1.current,
//                 pin:bg1.current,
//                 pinSpacing: false,
//                 start: "top top",
//                 endTrigger: ".last",
//                 end:"bottom bottom"
//             });

//             gsap.set(container.current, {
//                 marginTop: -container.current.offsetHeight,
//             });

//             gsap
//             .timeline({
//                 scrollTrigger: {
//                     trigger: img_container.current,
//                 pin: img_container.current,
//                 scrub: 1,
//                 start: "0% 0%",
//                 },
                
//             })
//             .to(img.current , { transform: "translateZ(2200px)"}, 0)
//             .to(text1.current , { y: -800 },0.05, "<")
//             .to(text2.current , { y: -800 },0.08, "<")
//             .fromTo(container.current,
//                 { yPercent: 100, scaleY: 2},
//                 { yPercent: 0, scaleY: 1 }
//             )
//         });
        

//         return () => ctx.revert();
//     }, []);
//   return (
//     <>
//     <div className="about-main relative "> 
//     <div ref={bg1} className="bg bg-[#000000] absolute h-screen w-screen z-[-1]"></div>
    
//     <section>
//     <div ref={img_container} className="img-container perspective h-screen w-screen flex item-center justify-center">
//         <img ref={img} className="image" src={bg} alt="" />
//       <div className='text-white absolute mt-[15vw] flex flex-col item-center justify-center'>
//         <h1 ref={text1} className='Kalnia text-center text-[150px]'>
//             <span className='text-stroke'>Outlook</span> Above
//         </h1>
//         <p ref={text2} className='text-center opacity-50  text-[12px] text-white'>
//             {" "}
//             A Showcase of the world's best aerial photography
//         </p>
//       </div>
//     </div>
//     <div  ref={container} className="container py-12 flex flex-wrap item-center justify-around">
//         <div className="col-1 flex flex-col gap-16 translate-y-[30%] pb-8">
//             <img className="w-[450px] h-[350px]" src={img2} alt="" />
//             {/* <img className="w-[400px] h-[400px]" src={img3} alt="" /> */}
//         </div>
//         <div className="col-2 flex flex-col gap-16">
//         <img className="w-[600px] h-[400px]" src={img4} alt="" />
//         <img className="w-[400px] h-[400px] last" src={img5} alt="" />
//         </div>
//     </div>

//     </section>
    
//     </div>
//     </>
//   )
// }

// export default About;
