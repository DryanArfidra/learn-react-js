import { z } from "zod";

export const personalInfoSchema = z.object({
  fullName: z.string().min(1, "Nama lengkap wajib diisi"),
  email: z.string().email("Email tidak valid"),
});

export const addressInfoSchema = z.object({
  street: z.string().min(1, "Alamat wajib diisi"),
  city: z.string().min(1, "Kota wajib diisi"),
});

export const checkoutSchema = personalInfoSchema.and(addressInfoSchema);

export type CheckoutValues = z.infer<typeof checkoutSchema>;