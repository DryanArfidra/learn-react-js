import { z } from "zod";

export const registrationSchema = z.object({
  email: z.string().email({ message: "Email tidak valid" }),
  password: z
    .string()
    .min(8, { message: "Password minimal 8 karakter" }),
});

export type RegistrationValues = z.infer<typeof registrationSchema>;

export const socialLinksSchema = z.object({
  links: z.array(z.object({ platform: z.string().min(1, "Platform wajib diisi"), url: z.string().url("URL tidak valid") })).min(1, "Minimal satu link harus ditambahkan"),
});

export type SocialLinksValues = z.infer<typeof socialLinksSchema>;

// --- TAMBAHKAN KODE BARU INI ---
export const advancedFormSchema = registrationSchema.extend({
  profilePicture: z
    .instanceof(File, { message: "Harap pilih sebuah file." })
    .refine((file) => file.size <= 5000000, `Ukuran file maksimal 5MB.`)
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      "Hanya file .jpg, .png, dan .webp yang diperbolehkan."
    )
    .optional(),
});

export type AdvancedFormValues = z.infer<typeof advancedFormSchema>;