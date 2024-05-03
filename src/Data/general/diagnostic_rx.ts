import { DataTypeGrafic } from "../../Component/Layout/Landing2/Landing2";
import { DataType } from "../../Global/Types/dataType";
import DataJson from "../praxis-mock2.json";

//@ts-ignore
const data: DataType[] = DataJson;

const rx = data.map((v) => v.diagnosticos.rx);
var Lastproperty: string[] = [rx[0].conclusion_1];
var Lastproperty2: string[] = [rx[0].conclusion_2];
for (var i = 0; i < rx.length; i++) {
  if (rx[i].conclusion_1 != Lastproperty[0]) {
    Lastproperty.push(rx[i].conclusion_1);
  }

  if (rx[i].conclusion_2 != Lastproperty2[0]) {
    Lastproperty2.push(rx[i].conclusion_2);
  }
}

const newDataRx: DataTypeGrafic[] = [];
for (var i = 0; i < Lastproperty.length; i++) {
  newDataRx.push({ name: Lastproperty[i], value: 0 });
}

for (var i = 0; i < Lastproperty2.length; i++) {
  newDataRx.push({ name: Lastproperty2[i], value: 0 });
}

newDataRx.map((rx) => {
  rx.value = data.filter(
    (v) =>
      v.diagnosticos.rx.conclusion_1 === rx.name ||
      v.diagnosticos.rx.conclusion_2 === rx.name
  ).length;
  return rx;
});

export const diagnostic_rx = newDataRx;