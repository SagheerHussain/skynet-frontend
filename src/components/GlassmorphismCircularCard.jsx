import React from "react";
import { Link } from "react-router-dom";

export default function GlassmorphismCircularCard({
  title,
  tagline,
  icon,
  customClasses = "",
  link,
}) {
  return (
    <div className={`${customClasses}`}>
      <div
        className="
      relative
      rounded-xl flex flex-col items-center justify-center
      text-center lg:py-3 py-4
      w-full
      glassmorphism_card cursor-pointer group
    "
      >
        <div className="glassmorphism_effect_hover"></div>
        <Link to={link}>
          {/* Flip icon wrapper */}
          <div className="mt-8 flip-container">
            <div className="inline-block flip-icon group-hover:flipped transition-transform duration-500">
              {icon}
            </div>
          </div>

          <h1 className="mt-2 text-[.9rem] lg:text-base xl:text-lg font-semibold text-white px-4 py-3 rounded-md z-[12]">
            {title}
          </h1>
          <p className="px-3 text-xs lg:text-base font-light text-gray-300 z-[12]">
            {tagline}
          </p>
        </Link>
      </div>
    </div>
  );
}
