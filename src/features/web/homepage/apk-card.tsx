"use client";
import Link from "next/link";
import useMedia from "use-media";
import { ChevronRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { truncateString } from "@/lib/utils";

type ApkCardProp = {
  title: string;
  link?: string;
  children: React.ReactNode;
};

export const ApkCard = ({ title, link, children }: ApkCardProp) => {
  const isMobile = useMedia({ maxWidth: "768px" });

  return (
    <div className="my-6 w-full">
      <Card>
        <CardHeader>
          <CardTitle className="w-full flex items-center justify-between text-lg font-medium">
            <h2>{truncateString(title, isMobile)}</h2>
            {link && (
              <Link
                href={link}
                className="text-neutral-600 text-sm flex items-center justify-center"
              >
                <span className="hidden sm:inline">More</span>
                <ChevronRight className="size-6" />
              </Link>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
};
