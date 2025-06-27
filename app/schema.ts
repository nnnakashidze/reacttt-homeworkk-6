import { z } from "zod";

export const loginSchema = z.object({
  LastName: z.string().min(6, "min 6 letter"),
  FirsName: z.string().min(6, "min 6 letter"),
  Email: z.string().min(6, "min 6 letter"),
  PhoneNumber: z.string().min(6, "min 6 letter"),
  Message: z.string().min(6, "min 6 letter"),
});
export type LoginType = z.infer<typeof loginSchema>;
