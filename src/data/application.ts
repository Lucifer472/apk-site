import { z } from "zod";

import { db } from "@/lib/db";
import { addApkFormSchema } from "@/features/dashboard/admin/schema";

export const createApplication = async (
  v: z.infer<typeof addApkFormSchema>
) => {
  try {
    const data = await db.application.create({
      data: {
        age: v.age,
        category: v.category,
        developer: v.developer,
        download: v.download,
        features: v.features,
        icon: v.icon,
        link: v.link,
        id: v.package_name,
        name: v.name,
        rating: v.ratings,
        version: v.version,
      },
    });

    if (v.images) {
      const imagesData = [];

      for (let i = 0; i < v.images.length; i++) {
        if (!!v.images[i]) {
          imagesData.push({
            applicationId: data.id,
            url: v.images[i],
          });
        }
      }

      if (imagesData.length > 0) {
        await db.images.createMany({
          data: imagesData,
        });
      }
    }

    return data;
  } catch {
    return null;
  }
};

export const findApplicationById = async ({ id }: { id: string }) => {
  try {
    return await db.application.findUnique({
      where: { id },
      include: {
        images: true,
      },
    });
  } catch {
    return null;
  }
};

export const getRelatedApps = async (category: string) => {
  try {
    return await db.application.findMany({
      where: { category },
      take: 5,
    });
  } catch {
    return null;
  }
};

export const getTopDownloadApplications = async () => {
  try {
    return await db.application.findMany({
      take: 6,
    });
  } catch {
    return null;
  }
};
