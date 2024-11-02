import { Task } from "@/types/nodes";

export function createDescriptionNumber(color: string) {
  const numberBackground = figma.createFrame();
  numberBackground.resize(24, 24);
  numberBackground.fills = [figma.util.solidPaint(color)];
  numberBackground.cornerRadius = 24;
  numberBackground.paddingTop = 4;
  numberBackground.paddingBottom = 4;
  numberBackground.paddingLeft = 4;
  numberBackground.paddingRight = 4;
  numberBackground.itemSpacing = 10;
  numberBackground.layoutMode = "HORIZONTAL";
  numberBackground.primaryAxisAlignItems = "CENTER";
  numberBackground.counterAxisAlignItems = "CENTER";

  return numberBackground;
}

export async function createDescriptionText({ text, title }: Task) {
  await figma.loadFontAsync({ family: "Gantari", style: "Bold" });
  await figma.loadFontAsync({ family: "Gantari", style: "Regular" });
  const textFrame = figma.createFrame();

  const descriptionTitle = figma.createText();
  descriptionTitle.fontName = { family: "Gantari", style: "Bold" };
  descriptionTitle.fontSize = 16;
  descriptionTitle.characters = title ? title : "Title";
  descriptionTitle.lineHeight = { value: 20, unit: "PIXELS" };
  descriptionTitle.fills = [figma.util.solidPaint("#333333")];

  const descriptionText = figma.createText();
  descriptionText.fontName = { family: "Gantari", style: "Regular" };
  descriptionText.fontSize = 14;
  descriptionText.characters = text ? text : "Description";
  descriptionText.lineHeight = { value: 20, unit: "PIXELS" };
  descriptionText.fills = [figma.util.solidPaint("#888888")];
  descriptionText.textAutoResize = "HEIGHT";

  textFrame.appendChild(descriptionTitle);
  textFrame.appendChild(descriptionText);

  return textFrame;
}
