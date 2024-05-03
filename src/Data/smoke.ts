import { DataTypeGrafic } from "../Component/Layout/Landing2/Landing2";
import { DataType } from "../Global/Types/dataType";
import DataJson from "./praxis-mock2.json";

//@ts-ignore
const data: DataType[] = DataJson;

const smoke = data.map((v) => v.habitos.fuma);

var Lastproperty: string[] = [smoke[0]];

for (var i = 0; i < smoke.length; i++) {
  //search if the value is already in the array
  if (!Lastproperty.includes(smoke[i])) {
    Lastproperty.push(smoke[i]);
  }
}

const newDataSmoke: DataTypeGrafic[] = [];
for (var i = 0; i < Lastproperty.length; i++) {
  newDataSmoke.push({ name: Lastproperty[i], value: 0 });
}

newDataSmoke.map((rx) => {
  rx.value = data.filter((v) => v.habitos.fuma === rx.name).length;
  return rx;
});

export const diagnostic_smoke = newDataSmoke;
