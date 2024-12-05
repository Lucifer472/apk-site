"use client";

import useMedia from "use-media";
import { AdsModule } from "./ads-module";

export const TopAd = () => {
  return <AdsModule adSlot="" />;
};

export const TopAdLarge = () => {
  const isLarge = useMedia({ minWidth: "768px" });

  if (!isLarge) return;
  return <AdsModule adSlot="" />;
};

export const TopAdSmall = () => {
  const isSmall = useMedia({ maxWidth: "768px" });

  if (!isSmall) return;
  return <AdsModule adSlot="" />;
};

export const MiddleAd = () => {
  return <AdsModule adSlot="" />;
};

export const BottomMiddleAd = () => {
  return <AdsModule adSlot="" />;
};

export const BottomAd = () => {
  return <AdsModule adSlot="" />;
};
