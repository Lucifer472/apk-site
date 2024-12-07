import { z } from "zod";

export const addApkFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  icon: z.string().transform((value) => (value === "" ? "" : value)),
  category: z.string(),
  ratings: z.string(),
  age: z.string(),
  download: z.string(),
  link: z.string().min(1, { message: "link is required" }),
  images: z.string().array(),
  package_name: z.string().min(1, { message: "appId is required" }),
  developer: z.string().min(1, { message: "developer name is required" }),
  version: z.string(),
  features: z.string().min(1, { message: "Features is required" }),
});
