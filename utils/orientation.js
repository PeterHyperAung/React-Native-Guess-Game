export const orientationOptions = {
  PORTRAIT: "portrait",
  LANDSCAPE: "landscape",
};

export const getOrientation = (width, height) =>
  width < height ? orientationOptions.PORTRAIT : orientationOptions.LANDSCAPE;
