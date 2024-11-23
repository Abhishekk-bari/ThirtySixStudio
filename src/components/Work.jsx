import React from "react";

const Services = () => {
  return (
    <div className="relative z-[1]">
      <h3 className="text-3xl sm:text-4xl pl-[10vw] sm:pl-[80vw] tracking-tighter underline">
        SERVICES
      </h3>
      <div className="leading-[1.8] pl-4 sm:pl-40 w-[90%] sm:w-[80%] mt-4 sm:mt-1 text-base sm:text-lg">
        <span className="block mt-10 sm:mt-20">
          <strong>1. Portrait Photography:</strong> Capture the essence of individuals, families, or groups with creative portrait sessions.
        </span>
        <hr className="my-6 sm:my-10" />
        <span className="block mt-2">
          <strong>2. Event Photography:</strong> Document the special moments of your life, from weddings and birthdays to corporate events.
        </span>
        <hr className="my-6 sm:my-10" />
        <span className="block mt-2">
          <strong>3. Product Photography:</strong> Highlight your products with professional images for websites, catalogs, and social media.
        </span>
        <hr className="my-6 sm:my-10" />
        <span className="block mt-2">
          <strong>4. Travel & Landscape Photography:</strong> Stunning images that tell stories from around the world, available for purchase or licensing.
        </span>
        <hr className="my-6 sm:my-10" />
      </div>
      <h1 className="pt-6 sm:pt-10 text-center text-4xl sm:text-7xl">
        Where Every Picture Tells Your Story
      </h1>
    </div>
  );
};

export default Services;
