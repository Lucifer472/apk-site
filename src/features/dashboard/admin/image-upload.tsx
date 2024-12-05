"use client";

import { useEffect, useRef, useState } from "react";
import { PlusCircleIcon } from "lucide-react";
import { toast } from "sonner";

import Image from "next/image";

export const ImageUpload = ({
  value,
  onChange,
  index,
}: {
  value: string[];
  onChange: (v: string[]) => void;
  index: number;
}) => {
  const [image, setImage] = useState<File | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      fetch("https://images.drivingexamexpert.com/upload/blog.php", {
        method: "POST",
        body: formData,
      }).then((res) =>
        res.json().then((res) => {
          console.log(res);

          if (res.success) {
            if (!value[index]) {
              const newArray = value;
              newArray[index] = res.file.url;
              newArray.push("");
              onChange(newArray);
            } else {
              const newArray = value;
              newArray.push(res.file.url);
              newArray.push("");
              onChange(newArray);
            }
          } else {
            toast.error("Failed to upload Image!");
          }
        })
      );
    }
  }, [image]);

  return (
    <div
      onClick={() => inputRef?.current?.click()}
      className="size-[100px] relative gap-x-2 cursor-pointer border-2 border-neutral-100 border-dashed rounded-sm flex flex-col items-center justify-center"
    >
      {!!value[index] ? (
        <Image
          src={value[index]}
          alt="Upload Image"
          fill
          style={{ objectFit: "cover" }}
        />
      ) : (
        <>
          <PlusCircleIcon />
          <span className="text-center text-xs font-light text-neutral-500">
            Upload Image
          </span>
        </>
      )}
      <input
        className="hidden"
        ref={inputRef}
        onChange={(e) =>
          e.currentTarget &&
          e.currentTarget.files &&
          setImage(e.currentTarget.files[0])
        }
        accept=".jpg,.svg,.jpeg,.png"
        type="file"
      />
    </div>
  );
};
