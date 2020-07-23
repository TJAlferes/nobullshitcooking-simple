import { Crop } from 'react-image-crop';

export async function getCroppedImage(
  imageWidth: number,
  imageHeight: number,
  image: HTMLImageElement,
  crop: Crop,
  fileName: string
) {
  if (!crop.x || !crop.y || !crop.width || !crop.height) return;
  const canvas = document.createElement("canvas");
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = imageWidth;
  canvas.height = imageHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    imageWidth,
    imageHeight
  );

  const resizedPreview: string = await new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (!blob) return;
      //blob.name = fileName;  // necessary?
      const fileUrl = window.URL.createObjectURL(blob);
      resolve(fileUrl);
    }, 'image/jpeg', 1);
  });

  const resizedFinal: File = await new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (!blob) return;
      //blob.name = fileName;  // necessary?
      const image = new File([blob], "resizedFinal", {type: "image/jpeg"});
      resolve(image);
    }, 'image/jpeg', 1);
  });

  return {resizedPreview, resizedFinal};
}