"use client";

import { DownloadIcon } from "lucide-react";
import { useUpdateApplication } from "./api/use-update-application";

export const ClickedApp = ({ link, id }: { link: string; id: string }) => {
  const { mutate, isPending } = useUpdateApplication();

  const handleClick = () => {
    mutate(
      {
        param: { applicationId: id },
      },
      {
        onSettled: () => {
          window.open(link, "_blank");
        },
      }
    );
  };

  return (
    <div className="flex items-center justify-center w-full md:w-fit">
      <button
        disabled={isPending}
        onClick={handleClick}
        className="flex items-center justify-center gap-x-1 overflow-hidden relative w-full md:w-[180px] py-4 bg-main text-white rounded-xl"
      >
        <div className="absolute top-0 right-0 text-xs p-[2px] bg-white bg-opacity-15">
          Latest Apk
        </div>
        <DownloadIcon />
        <span className="font-semibold">Download</span>
        <div className="animation-round relative"></div>
      </button>
    </div>
  );
};
