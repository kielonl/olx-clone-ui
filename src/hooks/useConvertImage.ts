export const UseConvertImage = (
  file: any
): Promise<ArrayBuffer | string | null> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file.target.files[0]);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error: any) => {
      reject(error);
    };
  });
};
