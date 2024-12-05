import { redirect } from "next/navigation";

import { findApplicationById } from "@/data/application";

import { BreadCrumb } from "@/features/web/details/breadcrumb";
import { AppDownloadLabel } from "@/features/web/details/app-download-label";
import { AppScreenshots } from "@/features/web/details/app-screenshot";
import { RelatedApps } from "@/features/web/details/related-apps";
import {
  BottomAd,
  BottomMiddleAd,
  MiddleAd,
  TopAdLarge,
} from "@/features/ads/ads";
import { AppDetailsCard } from "@/features/web/details/app-details";
import { TopFreeApk } from "@/features/web/details/top-free-apk";
import { TopDownloadApps } from "@/features/web/details/top-download-app";

const AppDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const data = await findApplicationById({ id });

  if (!data) redirect("/");

  return (
    <div className="w-full px-2 md:px-4 lg:px-0 py-4 lg:py-6 space-y-2 md:space-y-4 lg:space-y-6">
      <BreadCrumb category={data.category} id={data.id} name={data.name} />
      <div className="flex flex-col xl:grid xl:grid-cols-3 gap-4 w-full">
        <div className="col-span-2">
          <AppDownloadLabel
            icon={data.icon}
            link={data.link}
            name={data.name}
            category={data.category}
            age={data.age}
            download={data.download}
            rating={data.rating}
          />
          <TopAdLarge />
          <AppScreenshots images={data.images} />
          <RelatedApps category={data.category} />
          <MiddleAd />
          <AppDetailsCard data={data} />
          <BottomAd />
          <TopFreeApk />
        </div>
        <div className="col-span-1 space-y-4 hidden lg:block">
          <div className="p-2 bg-white rounded-md">
            <BottomMiddleAd />
          </div>
          <TopDownloadApps />
        </div>
      </div>
    </div>
  );
};

export default AppDetailsPage;
