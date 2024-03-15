import { z } from "zod";

export const schemaCreatePerson = z.object({
  nombres: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  apellidoPaterno: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  ciTitular: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
});
