import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

const FIGMA_WIDTH = 375;
const FIGMA_HEIGHT = 812;
const px = (valuePx: number) => {
  const widthPercent = (valuePx / FIGMA_WIDTH) * 100;
  return PixelRatio.roundToNearestPixel((width * widthPercent) / 100);
};

const pxHeight = (valuePx: number) => {
  const heightPercent = (valuePx / FIGMA_HEIGHT) * 100;
  return PixelRatio.roundToNearestPixel((height * heightPercent) / 100);
};

export const metrics = {
  px,
  pxHeight,
  width,
  height,
};
