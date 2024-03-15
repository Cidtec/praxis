import { z } from "zod";

export const schemaCreateExamHemograma = z.object({
  RX: z.string().nonempty("El campo Rx no puede estar vacío"),
  ECG: z.string().nonempty("El campo ECG no puede estar vacío"),
});