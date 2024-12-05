import { BottomAd, BottomMiddleAd, MiddleAd, TopAd } from "@/features/ads/ads";

import { ApkCard } from "@/features/web/homepage/apk-card";
import {
  ApkIconHolder,
  ApkIconHolderLong,
} from "@/features/web/homepage/apk-icon-holder";
import { ImageSlider } from "@/features/web/homepage/image-slider";

import { getTopDownloadApplications } from "@/data/application";
import { allCategory } from "@/constant";

const Homepage = async () => {
  const data = await getTopDownloadApplications();

  return (
    <div className="min-h-screen px-4 sm:px-2 lg:px-0">
      <TopAd />
      <ImageSlider />
      {data && (
        <ApkCard link="/" title="Top Download Apps">
          <div className="w-full flex items-center justify-between flex-wrap">
            {data.map((d) => (
              <ApkIconHolder
                href={d.id}
                name={d.name}
                src={d.icon}
                key={d.id}
              />
            ))}
          </div>
        </ApkCard>
      )}
      <MiddleAd />
      <ApkCard link="/" title="🎮Popular Games In Last 24 Hours">
        <div className="w-full flex items-center justify-between flex-wrap">
          {data &&
            data.map((d) => (
              <ApkIconHolder
                href={d.id}
                name={d.name}
                src={d.icon}
                key={d.id}
              />
            ))}
        </div>
      </ApkCard>
      <ApkCard link="/" title="📱Popular Apps In Last 24 Hours">
        <div className="w-full flex items-center justify-between flex-wrap gap-6">
          {data &&
            data.map((d) => {
              const category = allCategory.find((c) => c.value === d.category);
              return (
                <ApkIconHolderLong
                  href={d.id}
                  name={d.name}
                  src={d.icon}
                  category={category ? category.label : d.category}
                  star={d.rating}
                  key={d.id}
                />
              );
            })}
        </div>
      </ApkCard>
      <BottomMiddleAd />
      <ApkCard link="/" title=" 🧘‍♀️Your Home, Your Gym!">
        <div className="w-full flex items-center justify-between flex-wrap">
          {data &&
            data.map((d) => (
              <ApkIconHolder
                href={d.id}
                name={d.name}
                src={d.icon}
                key={d.id}
              />
            ))}
        </div>
      </ApkCard>
      <ApkCard link="/" title="👧👦Play, Learn, and Grow (Only for 12-)">
        <div className="w-full flex items-center justify-between flex-wrap">
          {data &&
            data.map((d) => (
              <ApkIconHolder
                href={d.id}
                name={d.name}
                src={d.icon}
                key={d.id}
              />
            ))}
        </div>
      </ApkCard>
      <BottomAd />
    </div>
  );
};

export default Homepage;
