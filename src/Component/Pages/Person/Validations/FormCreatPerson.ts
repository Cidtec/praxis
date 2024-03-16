import { z } from "zod";

export const schemaCreatePerson = z.object({
  nombres: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  apellidoPaterno: z.string().nonempty("El campo apellido Paterno no puede estar vacío"),
  apellidoMaterno: z.string().nonempty("El campo apellido Materno no puede estar vacío"),
  ciTitular: z.string().nonempty("El campo ci Titular no puede estar vacío"),
  codigoTitular: z.string().nonempty("El campo codigo Titular no puede estar vacío"),
  sexo: z.string().nonempty("El campo sexo no puede estar vacío"),
  fechaIngresoRamo: z.string().nonempty("El campo fecha Ingreso Ramo no puede estar vacío"),
  fechaInclusion: z.string().nonempty("El campo fecha Inclusion no puede estar vacío"),
  año: z.string().nonempty("El campo año no puede estar vacío"),
  area: z.string().nonempty("El campo area no puede estar vacío"),
  fechaNacimiento: z.string().nonempty("El campo fechaNacimiento no puede estar vacío"),
  edadActual: z.string().nonempty("El campo edadActual no puede estar vacío"),
  ciudad: z.string().nonempty("El campo ciudad no puede estar vacío"),
  peso:z.string().nonempty("El campo peso no puede estar vacío"),
  talla: z.string().nonempty("El campo talla no puede estar vacío"),
  imc: z.string().nonempty("El campo imc no puede estar vacío"),
  pa: z.string().nonempty("El campo pa no puede estar vacío"),
  saturacion: z.string().nonempty("El campo saturacion no puede estar vacío"),
});
