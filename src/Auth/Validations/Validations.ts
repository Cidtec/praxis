import { z } from "zod";

export const schemaLogin = z
  .object({
    email: z.string().email("Correo electronico invalido"),
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
  })

