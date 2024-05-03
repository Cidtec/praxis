import { DataTypeGrafic } from "../../Component/Layout/Landing2/Landing2";
import { DataType } from "../../Global/Types/dataType";
import DataJson from "../praxis-mock2.json";

//@ts-ignore
const data: DataType[] = DataJson;

const age = data.map((v) => v.edad);

var Lastproperty: string[] = [age[0].toString()];

for (var i = 0; i < age.length; i++) {
  //search if the value is already in the array
  if (!Lastproperty.includes(age[i].toString())) {
    Lastproperty.push(age[i].toString());
  }
}

const newDataAge: DataTypeGrafic[] = [];
for (var i = 0; i < Lastproperty.length; i++) {
  newDataAge.push({ name: Lastproperty[i], value: 0 });
}

newDataAge.map((rx) => {
  rx.value = data.filter((v) => v.edad.toString() === rx.name).length;
  return rx;
});

export const diagnostic_age = newDataAge;
