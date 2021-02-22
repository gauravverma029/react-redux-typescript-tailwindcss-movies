import React from "react";

type ImageProps = {
  src: string;
};

const Image: React.FC<ImageProps> = ({ src }) => {
  return <img src={src} loading="lazy" className="object-cover h-48 w-full rounded-lg rounded-b-none" alt="" />;
};
export default Image;
