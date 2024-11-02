import {
  createHeaderCheckbox,
  createHeaderTitle,
} from "@/frames/headerFunctions";
import {
  createPrimaryComponent,
  createTaskDescription,
  createTaskHeader,
} from "@/frames/frameCreation";
import {
  createDescriptionNumber,
  createDescriptionText,
} from "@/frames/taskFunctions";
import { PostMessage } from "@/types/message";

const typeHash = new Map([
  ["variables", { backgroundColor: "#D6E6FF", color: "#4B47FF" }],
  ["interactivity", { backgroundColor: "#D8F3E5", color: "#09C37B" }],
  ["accessibility", { backgroundColor: "#FDF2D8", color: "#FFC700" }],
  ["caution", { backgroundColor: "#FAE0E0", color: "#FF7A6C" }],
]);

figma.showUI(__html__, { themeColors: true, width: 700, height: 500 });

figma.ui.onmessage = async (msg: PostMessage) => {
  if (msg.type === "create-task") {
    const taskVariables = typeHash.get(msg.taskType);
    const backgroundColor = taskVariables?.backgroundColor || "#E0E0E0";
    const color = taskVariables?.color || "#333333";
    const title = msg.title
      ? msg.title[0].toUpperCase() + msg.title.substring(1)
      : "Title";

    const primaryComponent = createPrimaryComponent(backgroundColor, title);
    const headerTitle = await createHeaderTitle(msg.taskType, color);
    const headerCheckbox = createHeaderCheckbox(color);

    await createTaskHeader({
      parent: primaryComponent,
      title: headerTitle,
      checkbox: headerCheckbox,
    });

    const descriptionNumber = createDescriptionNumber(color);
    const descriptionText = await createDescriptionText({
      title: msg.title,
      text: msg.text,
    });

    await createTaskDescription({
      parent: primaryComponent,
      descriptionNumber,
      descriptionText,
    });

    figma.currentPage.appendChild(primaryComponent);
    figma.notify("Task created successfully!");
  }

  figma.closePlugin();
};
