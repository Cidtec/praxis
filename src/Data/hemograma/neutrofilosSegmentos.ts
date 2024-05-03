import { DataType } from "../../Global/Types/dataType";
import DataJson from "../praxis-mock2.json";

//@ts-ignore
const data: DataType[] = DataJson;

const gr = data.map((v) => v.diagnosticos.hemograma.neutrofilos_segmentados);

const newData = gr.map((v, index) => {
  return { name: index + 1, uv: v.toString() };
});

export const diagnostic_hemogram_neutrofilos_segmentados = newData;

