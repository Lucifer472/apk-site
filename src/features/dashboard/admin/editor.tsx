"use client";

import { useEffect, useRef } from "react";
import { toast } from "sonner";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import EditorjsList from "@editorjs/list";

import { BlogContent } from "@/types";

const Editor = ({
  initialData,
  setData,
}: {
  initialData?: BlogContent;
  setData: (v: EditorJS.OutputData) => void;
}) => {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    editorRef.current = new EditorJS({
      holder: "editorjs",
      tools: {
        header: Header,
        list: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          class: EditorjsList,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
      },
      data: initialData,
      placeholder: "Let`s write an awesome Apps Features!",
      onChange: async () => {
        if (editorRef.current) {
          try {
            const outputData = await editorRef.current.save();
            setData(outputData);
          } catch {
            toast.error("Failed to save editor data");
          }
        }
      },
    });

    return () => {
      if (editorRef.current) {
        editorRef.current = null;
      }
    };
  }, [setData, initialData]);

  return (
    <div className="space-y-2 px-2">
      <span className="font-medium">App Features</span>
      <div className="border border-neutral-300 shadow-sm focus:outline rounded-md w-full flex items-center justify-center py-6">
        <div
          id="editorjs"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          ref={editorRef}
          className="prose w-full"
        ></div>
      </div>
    </div>
  );
};

export default Editor;
