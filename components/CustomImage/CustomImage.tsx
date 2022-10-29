import React from "react";

interface CustomImageProps {
  className?: string;
  src?: string;
  alt?: string;
  height?: string | number;
  width?: string | number;
  onClick?: (e: any) => any;
}

export const CustomImage: React.FC<CustomImageProps> = ({
  className,
  src,
  alt = "",
  onClick,
  height,
  width,
}) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onClick={onClick}
      height={height}
      width={width}
    />
  );
};
