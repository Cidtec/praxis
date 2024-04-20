import AboutUs from "./Components/AboutUs";
import Types from "./Components/Types";
import HeaderComp from "./Components/header";
import DataJson from "../../../Data/praxis-mock.json";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { DataType } from "../../../Global/Types/dataType";
import { useEffect, useState } from "react";
import PieGrafic from "./Components/PieGrafic";
import { PropsPieGraficType } from "./Types/propsPieGrafic";

type acc = { [key: string]: number };

const Landing = () => {
  const [loading, seLoading] = useState(true);
  //@ts-ignore
  const data: DataType[] = DataJson;

  // Gender data
  const genderData = data.reduce((acc, curr) => {
    acc[curr.sexo] = (acc[curr.sexo] || 0) + 1;
    return acc;
  }, {});
  const genderChartData = Object.keys(genderData).map((key) => ({
    name: key,
    value: genderData[key],
  }));

  //* Age data
  const [dataAge, setDataAge] = useState<PropsPieGraficType[]>([
    { name: "11-17", value: 0 },
    { name: "18-24", value: 0 },
    { name: "25-34", value: 0 },
    { name: "35-44", value: 0 },
    { name: "45-54", value: 0 },
    { name: "55-64", value: 0 },
    { name: "65-74", value: 0 },
    { name: "75-84", value: 0 },
    { name: "85-94", value: 0 },
    { name: "95-104", value: 0 },
  ]);

  //* cityes
  const [dataCities, setDataCities] = useState([
    {
      name: "La paz",
      value: 0,
    },
    {
      name: "Cochabamba",
      value: 0,
    },
    {
      name: "Santa Cruz",
      value: 0,
    },
    {
      name: "Oruro",
      value: 0,
    },
    {
      name: "Potosi",
      value: 0,
    },
    {
      name: "Tarija",
      value: 0,
    },
    {
      name: "Beni",
      value: 0,
    },
    {
      name: "Pando",
      value: 0,
    },
  ]);

  //? Biometric data
  //* weight
  const [dataWeight, setDataWeight] = useState([
    {
      name: "40-49",
      value: 0,
    },
    {
      name: "50-59",
      value: 0,
    },
    {
      name: "60-69",
      value: 0,
    },
    {
      name: "70-79",
      value: 0,
    },
    {
      name: "80-89",
      value: 0,
    },
  ]);
  //* height
  const [dataHeight, setDataHeight] = useState([
    {
      name: "140-149",
      value: 0,
    },
    {
      name: "150-159",
      value: 0,
    },
    {
      name: "160-169",
      value: 0,
    },
    {
      name: "170-179",
      value: 0,
    },
    {
      name: "180-189",
      value: 0,
    },
  ]);

  const handleLoadData = () => {
    //* age
    dataAge.map((age) => {
      age.value = data.filter(
        (v) =>
          v.edad >= parseInt(age.name.split("-")[0]) &&
          v.edad <= parseInt(age.name.split("-")[1])
      ).length;
      return age;
    });
 

    //* cityes
     dataCities.map((city) => {
      city.value = data.filter(
        (v) => v.ciudad.toLowerCase() === city.name.toLowerCase()
      ).length;
      return city;
    });


    //? biometric data
    //* weight
   dataWeight.map((weight) => {
      weight.value = data.filter(
        (v) =>
          v.datos_biometricos.peso >= parseInt(weight.name.split("-")[0]) &&
          v.datos_biometricos.peso <= parseInt(weight.name.split("-")[1])
      ).length;
      return weight;
    });
    //* height
    dataHeight.map((height) => {
      height.value = data.filter(
        (v) =>
          v.datos_biometricos.talla >= parseInt(height.name.split("-")[0]) &&
          v.datos_biometricos.talla <= parseInt(height.name.split("-")[1])
      ).length;
      return height;
    });
  };

  useEffect(() => {
    handleLoadData();

    seLoading(false);
  }, []);

  // Education data
  /*  const educationData = data.reduce((acc, curr) => {
    acc[curr.education] = (acc[curr.education] || 0) + 1;
    return acc;
  }, {});
  const educationChartData = Object.keys(educationData).map(key => ({ name: key, value: educationData[key] })); */

  return (
    <div className="bg-first">
      <HeaderComp />
      <AboutUs />
      <Types />

      {/* Gender Chart */}
      <BarChart width={500} height={300} data={genderChartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>

      {/* Age Chart */}
      <PieGrafic data={dataAge} title="Edades" />
      <PieGrafic data={dataCities} title="Ciudades" />

      <div>
        <h1>Datos biometricos</h1>
        <div className="flex gap-1">
          <PieGrafic data={dataWeight} title="Peso" />
          <PieGrafic data={dataHeight} title="Talla" />
          <PieGrafic data={dataAge} title="Edades" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
