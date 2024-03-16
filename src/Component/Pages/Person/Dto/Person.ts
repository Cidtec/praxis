export interface PersonDTO {
  id:string;
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  ciTitular: string; // C.I Titular
  codigoTitular: string; // Codigo titular
  sexo: string;
  fechaIngresoRamo: string; // Fecha Ingreso Ramo (¿formato de fecha?)
  fechaInclusion: string; // Fecha Inclusión (¿formato de fecha?)
  año: number;
  area: string;
  fechaNacimiento: string; // Fecha Nacimiento (¿formato de fecha?)
  edadActual: number;
  ciudad: string;
  peso: number;
  talla: number;
  imc: number; // IMC (Índice de Masa Corporal)
  pa: string; // Presión Arterial
  saturacion: number; // Saturación
}