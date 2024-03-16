import { z } from "zod";

export const schemaCreateExamHemograma = z.object({
  RX: z.string().nonempty("El campo Rx no puede estar vacío"),
  ECG: z.string().nonempty("El campo ECG no puede estar vacío"),
  PAP: z.string(),
  GR: z.string(),
  GB: z.string(),
  HB: z.string(),
  Plaquetas: z.string(),
  Glicemia: z.string(),
  Colesterol: z.string(),
  Trigliceridos: z.string(),
});
