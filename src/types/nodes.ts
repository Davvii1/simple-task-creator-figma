export interface DescriptionNodes {
  descriptionNumber: FrameNode;
  descriptionText: FrameNode;
  parent: FrameNode;
}

export interface HeaderNodes {
  checkbox: FrameNode;
  parent: FrameNode;
  title: TextNode;
}

export interface Task {
  text: string | undefined;
  title: string | undefined;
}
