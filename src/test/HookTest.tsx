import { useEffect, useState } from "react";
import { UseConvertImage } from "../hooks/useConvertImage";

export const HookTest = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>("");

  const handleImageInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const _image = await UseConvertImage(e);
    setImage(_image);
  };
  useEffect(() => {
    console.log(image);
  }, [image]);
  return <input type="file" onChange={(e) => handleImageInput(e)} />;
};
