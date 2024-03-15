import { z } from "zod";

export const schemaCreateExamFisico = z.object({
  Olor: z.string().nonempty("El campo Olor no puede estar vacío"),
  Color: z.string().nonempty("El campo Color no puede estar vacío"),
});