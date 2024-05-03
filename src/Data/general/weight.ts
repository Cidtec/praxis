import { DataTypeGrafic } from "../../Component/Layout/Landing2/Landing2";
import { DataType } from "../../Global/Types/dataType";
import DataJson from "../praxis-mock2.json";

//@ts-ignore
const data: DataType[] = DataJson;

const weight = data.map((v) => v.datos_biometricos.peso);

var Lastproperty: string[] = [weight[0]];

for (var i = 0; i < weight.length; i++) {
  //search if the value is already in the array
  if (!Lastproperty.includes(weight[i])) {
    Lastproperty.push(weight[i]);
  }
}

const newDataWeight: DataTypeGrafic[] = [];
for (var i = 0; i < Lastproperty.length; i++) {
  newDataWeight.push({ name: Lastproperty[i], value: 0 });
}

newDataWeight.map((rx) => {
  rx.value = data.filter((v) => v.datos_biometricos.peso === rx.name).length;
  return rx;
});

export const diagnostic_weight = newDataWeight;
