import { ImagesProps } from "../../../../types";

interface Images extends ImagesProps {
  find(arg0: (img: ImagesProps) => boolean): unknown;
}

export const findImage = (images: Images, id: number): any => {
  // change type later
  const result = images.find((img: ImagesProps) => {
    return id === img.id;
  });
  return result;
};

export const findEmpty = (images: any) => {
  const result = images.find((img: ImagesProps) => {
    return img.url === undefined;
  });
  return result;
};
