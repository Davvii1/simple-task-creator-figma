import { DescriptionNodes, HeaderNodes } from "@/types/nodes";

export function createPrimaryComponent(backgroundColor: string, title: string) {
  const component = figma.createFrame();
  const { x, y } = figma.viewport.center;
  component.x = x;
  component.y = y;
  component.resize(380, 100);

  component.fills = [figma.util.solidPaint(backgroundColor)];
  component.name = title;
  component.cornerRadius = 8;
  component.layoutMode = "VERTICAL";
  component.paddingTop = 8;
  component.paddingBottom = 8;
  component.primaryAxisAlignItems = "MIN";
  component.counterAxisAlignItems = "MIN";
  component.clipsContent = true;
  component.effects = [
    {
      type: "DROP_SHADOW",
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0, a: 0.1 },
      offset: { x: 0, y: 6 },
      radius: 12,
      spread: 0,
      visible: true,
    },
  ];

  return component;
}

export async function createTaskHeader({
  parent,
  title,
  checkbox,
}: HeaderNodes) {
  const header = figma.createFrame();
  parent.appendChild(header);
  header.fills = [];
  header.clipsContent = false;
  header.layoutMode = "HORIZONTAL";
  header.layoutSizingHorizontal = "FILL";
  header.layoutSizingVertical = "HUG";
  header.primaryAxisAlignItems = "SPACE_BETWEEN";
  header.counterAxisAlignItems = "CENTER";
  header.paddingLeft = 24;
  header.paddingRight = 24;
  header.paddingTop = 8;
  header.paddingBottom = 8;

  header.appendChild(title);
  header.appendChild(checkbox);

  return header;
}

export async function createTaskDescription({
  parent,
  descriptionNumber,
  descriptionText,
}: DescriptionNodes) {
  const descriptionFrame = figma.createFrame();
  parent.appendChild(descriptionFrame);
  descriptionFrame.fills = [figma.util.solidPaint("#FFFFFF")];
  descriptionFrame.clipsContent = false;
  descriptionFrame.layoutMode = "HORIZONTAL";
  descriptionFrame.primaryAxisAlignItems = "MIN";
  descriptionFrame.counterAxisAlignItems = "MIN";
  descriptionFrame.layoutSizingHorizontal = "FILL";
  descriptionFrame.layoutSizingVertical = "HUG";
  descriptionFrame.paddingLeft = 24;
  descriptionFrame.paddingRight = 24;
  descriptionFrame.paddingTop = 12;
  descriptionFrame.paddingBottom = 12;
  descriptionFrame.itemSpacing = 8;

  descriptionFrame.appendChild(descriptionNumber);
  descriptionFrame.appendChild(descriptionText);

  descriptionText.fills = [];
  descriptionText.layoutMode = "VERTICAL";
  descriptionText.primaryAxisAlignItems = "MIN";
  descriptionText.counterAxisAlignItems = "MIN";
  descriptionText.layoutSizingHorizontal = "FILL";
  descriptionText.layoutSizingVertical = "FILL";
  descriptionText.itemSpacing = 8;
}
