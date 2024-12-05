import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { addApkFormSchema } from "../schema";
import { SessionMiddleware } from "@/lib/middleware";
import { createApplication } from "@/data/application";

const app = new Hono().post(
  "/create",
  zValidator("json", addApkFormSchema),
  SessionMiddleware,
  async (c) => {
    const v = c.req.valid("json");
    const data = await createApplication(v);
    if (!data) return c.json({ error: "Unable to create Application" }, 500);

    return c.json({ success: "App Created Successfully" }, 200);
  }
);

export default app;
