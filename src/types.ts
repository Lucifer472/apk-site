export type GlobalLayoutType = {
  children: React.ReactNode;
};

export type BlogContent = {
  time: number;
  blocks: {
    id: string;
    type: string;
    data: unknown;
  }[];
  version: string;
};
