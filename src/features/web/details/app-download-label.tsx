import Image from "next/image";
import Link from "next/link";
import { DownloadIcon, Star, UserIcon } from "lucide-react";

import { allCategory } from "@/constant";
import { formatNumber } from "@/lib/utils";

import { TopAdSmall } from "@/features/ads/ads";

type AppDownloadLabelProps = {
  name: string;
  link: string;
  icon: string;
  category: string;
  rating: string;
  download: string;
  age: string;
};

export const AppDownloadLabel = ({
  icon,
  link,
  name,
  category,
  rating,
  download,
  age,
}: AppDownloadLabelProps) => {
  const find = allCategory.find((item) => item.value === category);

  return (
    <div className="w-full p-6 bg-white rounded-xl flex flex-col gap-y-4 md:flex-row items-center justify-between relative">
      <div className="absolute top-0 right-0 aspect-square size-[44px]">
        <Image
          src={"/ribbon.png"}
          alt="Ribbon"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex items-center justify-start gap-x-4">
        <div className="relative size-[100px] aspect-square">
          <Image
            src={icon}
            alt={name}
            fill
            style={{ objectFit: "contain", borderRadius: "16px" }}
          />
        </div>
        <div className="flex flex-col items-start gap-y-2">
          <h3 className="text-2xl sm:text-4xl">{name}</h3>
          <p className="p-1 rounded-sm bg-main-hover font-medium cursor-pointer text-xs text-main">
            {find ? find.label : category}
          </p>
          <div className="hidden sm:flex items-center justify-center">
            <p className="text-center border-r-2 px-2 text-xs leading-6">
              <Star className="inline  fill-yellow-400 text-yellow-400 size-4" />{" "}
              {rating} <br />{" "}
              <span className="uppercase text-xs text-gray-600">Ratings</span>
            </p>
            <p className="text-center border-r-2 px-2 text-xs leading-6">
              <DownloadIcon className="inline  size-4" />{" "}
              {formatNumber(parseInt(download))}+
              <br />{" "}
              <span className="uppercase text-xs text-gray-600">Downloads</span>
            </p>
            <p className="text-center px-2 text-xs leading-6">
              <UserIcon className="inline  size-4" /> {age}+ <br />{" "}
              <span className="uppercase text-xs text-gray-600">Age</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex sm:hidden gap-x-4 items-center justify-center">
        <p className="text-center border-r-2 px-2 text-sm leading-6">
          <Star className="inline  fill-yellow-400 text-yellow-400 size-4" />{" "}
          {rating} <br />{" "}
          <span className="uppercase text-sm text-gray-600">Ratings</span>
        </p>
        <p className="text-center border-r-2 px-2 text-sm leading-6">
          <DownloadIcon className="inline  size-4" />{" "}
          {formatNumber(parseInt(download))}+
          <br />{" "}
          <span className="uppercase text-sm text-gray-600">Downloads</span>
        </p>
        <p className="text-center px-2 text-sm leading-6">
          <UserIcon className="inline  size-4" /> {age}+ <br />{" "}
          <span className="uppercase text-sm text-gray-600">Age</span>
        </p>
      </div>
      <TopAdSmall />
      <div className="flex items-center justify-center w-full md:w-fit">
        <Link
          href={link}
          target="_blank"
          className="flex items-center justify-center gap-x-1 overflow-hidden relative w-full md:w-[180px] py-4 bg-main text-white rounded-xl"
        >
          <div className="absolute top-0 right-0 text-xs p-[2px] bg-white bg-opacity-15">
            Latest Apk
          </div>
          <DownloadIcon />
          <span className="font-semibold">Download</span>
          <div className="animation-round relative"></div>
        </Link>
      </div>
    </div>
  );
};
