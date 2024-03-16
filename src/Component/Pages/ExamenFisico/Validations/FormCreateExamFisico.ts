import { z } from "zod";

export const schemaCreateExamFisico = z.object({
  Olor: z.string().nonempty("El campo Olor no puede estar vacío"),
  Color: z.string().nonempty("El campo Color no puede estar vacío"),
  Aspecto: z.string().nonempty("El campo Aspecto no puede estar vacío"),
  Densidad: z.string().nonempty("El campo Densidad no puede estar vacío"),
  PH: z.string().nonempty("El campo Ph no puede estar vacío"),
});