import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(20).max(500),
  category: z.string().min(3).max(20),
  link: z
  .string()
  .url("Must be a valid URL")
  .refine((url) => {
    // Normal image extensions
    if (/\.(jpeg|jpg|png|gif|webp|svg)$/i.test(url)) return true;

    // Unsplash dynamic links
    if (url.includes("source.unsplash.com")) return true;

    return false;
  }, "Must be an image URL"),
  pitch: z.string().min(10),
});