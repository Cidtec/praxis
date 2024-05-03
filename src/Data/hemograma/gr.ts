import { DataTypeGrafic } from "../../Component/Layout/Landing2/Landing2";
import { DataType } from "../../Global/Types/dataType";
import DataJson from "../praxis-mock2.json";

//@ts-ignore
const data: DataType[] = DataJson;

const gr = data.map((v) => v.diagnosticos.hemograma.globulos_rojos);

const newDataRx = gr.map((v, index) => {
  return { name: index + 1, uv: v.toString() };
});

export const diagnostic_hemogram_gr = newDataRx;
