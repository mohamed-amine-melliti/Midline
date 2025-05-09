import React from "react";

// Correct type for <img> element
export const FinefoodsLogoIcon: React.FC<
  React.ImgHTMLAttributes<HTMLImageElement>
> = (props) => (
  <img
    src="/images/midlinelogo.png"
    alt="Finefoods Logo"
    {...props}
  />
);

// SVG stays as is, SVGProps is appropriate
export const FinefoodsLogoText: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={90}
      height={12}
      viewBox="0 0 90 12"
      fill="none"
      {...props}
    >
      {/* SVG path content unchanged */}
    </svg>
  );
};
