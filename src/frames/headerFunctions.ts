export function createHeaderCheckbox(color: string) {
  const checkbox = figma.createFrame();
  checkbox.resize(24, 24);

  checkbox.fills = [];
  const ellipseBackground = figma.createEllipse();
  ellipseBackground.resize(24, 24);
  ellipseBackground.fills = [figma.util.solidPaint(color)];

  const ellipsePrincipal = figma.createEllipse();
  ellipsePrincipal.resize(16, 16);
  ellipsePrincipal.fills = [figma.util.solidPaint("#FFFFFF")];

  ellipsePrincipal.x =
    ellipseBackground.x +
    (ellipseBackground.width - ellipsePrincipal.width) / 2;
  ellipsePrincipal.y =
    ellipseBackground.y +
    (ellipseBackground.height - ellipsePrincipal.height) / 2;

  checkbox.appendChild(ellipseBackground);
  checkbox.appendChild(ellipsePrincipal);

  return checkbox;
}

export async function createHeaderTitle(type: string, color: string) {
  await figma.loadFontAsync({ family: "Gantari", style: "Bold" });
  const title = figma.createText();

  title.fontName = { family: "Gantari", style: "Bold" };
  title.fontSize = 16;
  title.characters = type
    ? type[0].toUpperCase() + type.substring(1)
    : "Task type";
  title.lineHeight = { value: 28, unit: "PIXELS" };
  title.fills = [figma.util.solidPaint(color)];

  return title;
}
