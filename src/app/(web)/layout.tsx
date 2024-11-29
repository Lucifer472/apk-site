import { GlobalLayoutType } from "@/types";

const WebLayout = ({ children }: GlobalLayoutType) => {
  return <main className="w-full min-h-screen bg-neutral-100">{children}</main>;
};

export default WebLayout;
