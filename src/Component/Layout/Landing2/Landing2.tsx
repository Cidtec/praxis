import AboutUs from "./Components/AboutUs";
import Types from "./Components/Types";
import HeaderComp from "./Components/header";
import DataJson from "../../../Data/praxis-mock2.json";
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
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  LabelList,
} from "recharts";
import { DataType } from "../../../Global/Types/dataType";
import { useEffect, useState } from "react";
import PieGrafic from "./Components/PieGrafic";
import { PropsPieGraficType } from "./Types/propsPieGrafic";
import { diagnostic_rx } from "../../../Data/general/diagnostic_rx";
import { diagnostic_smoke } from "../../../Data/general/smoke";
import { diagnostic_hemogram_gr } from "../../../Data/hemograma/gr";
import Cartesian from "./Components/Cartesian";
import { diagnostic_hemogram_gb } from "../../../Data/hemograma/gb";
import { diagnostic_hemogram_hemoglobina } from "../../../Data/hemograma/hemoglobina";
import { diagnostic_hemogram_hematocito } from "../../../Data/hemograma/hematocito";
import { diagnostic_hemogram_vcm } from "../../../Data/hemograma/vcm";
import { diagnostic_hemogram_cm } from "../../../Data/hemograma/cm";
import { diagnostic_hemogram_m } from "../../../Data/hemograma/m";
import { diagnostic_hemogram_neutrofilos_segmentados } from "../../../Data/hemograma/neutrofilosSegmentos";
import { diagnostic_hemogram_eosinofilos } from "../../../Data/hemograma/eosinofilos";
import { diagnostic_hemogram_linfositos } from "../../../Data/hemograma/linfositos";
import { diagnostic_hemogram_monocitos } from "../../../Data/hemograma/monocitos";
import { diagnostic_age } from "../../../Data/general/age";
import { diagnostic_weight } from "../../../Data/general/weight";

type acc = { [key: string]: number };

export interface DataTypeGrafic {
  name: string;
  value: number;
}

export interface CartesianType {
  name: number;
  uv: string;
}

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
  /*   const [dataAge, setDataAge] = useState<PropsPieGraficType[]>([
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
  ]); */

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

  //? Signos vitales
  //* Temperature
  const [dataTemperature, setDataTemperature] = useState([
    {
      name: "36-36.9",
      value: 0,
    },
    {
      name: "37-37.9",
      value: 0,
    },
    {
      name: "38-38.9",
      value: 0,
    },
    {
      name: "39-39.9",
      value: 0,
    },
    {
      name: "40-40.9",
      value: 0,
    },
  ]);

  //* Saturation
  const [dataSaturation, setDataSaturation] = useState([
    {
      name: "85-87",
      value: 0,
    },
    {
      name: "88-90",
      value: 0,
    },
    {
      name: "91-93",
      value: 0,
    },
    {
      name: "94-96",
      value: 0,
    },
    {
      name: "97-100",
      value: 0,
    },
  ]);

  //? habits
  //* smoke

  //* covid
  const [dataCovid, setDataCovid] = useState([
    { name: "Si", value: 0 },
    { name: "No", value: 0 },
  ]);

  //* Alcohol
  const [dataAlcohol, setDataAlcohol] = useState([
    { name: "Si", value: 0 },
    { name: "No", value: 0 },
  ]);

  //? Hemograma
  //* Linfositos

  //? diagnostico
  //* get all rx of my json

  const handleLoadData = () => {
    //* age
    /*     dataAge.map((age) => {
      age.value = data.filter(
        (v) =>
          v.edad >= parseInt(age.name.split("-")[0]) &&
          v.edad <= parseInt(age.name.split("-")[1])
      ).length;
      return age;
    }); */

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

    //* temperature
    dataTemperature.map((temperature) => {
      temperature.value = data.filter(
        (v) =>
          v.signos_vitales.temperatura >=
            parseFloat(temperature.name.split("-")[0]) &&
          v.signos_vitales.temperatura <=
            parseFloat(temperature.name.split("-")[1])
      ).length;
      return temperature;
    });

    //* saturation
    dataSaturation.map((saturation) => {
      saturation.value = data.filter(
        (v) =>
          v.signos_vitales.saturacion >=
            parseFloat(saturation.name.split("-")[0]) &&
          v.signos_vitales.saturacion <=
            parseFloat(saturation.name.split("-")[1])
      ).length;
      return saturation;
    });

    //* smoke

    //* covid
    dataCovid.map(() => {
      dataCovid[0].value = data.filter((v) => v.habitos.covid == "SI").length;
      dataCovid[1].value = data.filter((v) => v.habitos.covid == "NO").length;
    });

    //* alcohol
    dataAlcohol.map(() => {
      dataAlcohol[0].value = data.filter(
        (v) => v.habitos.bebidas_alcoholicas == "SI"
      ).length;
      dataAlcohol[1].value = data.filter(
        (v) => v.habitos.bebidas_alcoholicas == "NO"
      ).length;
    });
  };

  useEffect(() => {
    handleLoadData();
    seLoading(false);
  }, []);

  return (
    <>
      {!loading && (
        <div className="bg-first">
          <HeaderComp />
          <AboutUs />
          {/*    <Types /> */}

          <div className="flex flex-col gap-3">
            <div>
              <h1 className="text-3xl text-center">Datos generales</h1>
              <div className="flex justify-center items-center gap-3">
                {/* Age Chart */}
                <PieGrafic data={diagnostic_age} title="Edades" />
                {/* Gender Chart */}
                <div>
                  <h2 className="text-2xl text-center">Generos</h2>
                  <BarChart width={500} height={300} data={genderChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </div>
                {/* City Chart */}
                <PieGrafic data={dataCities} title="Ciudades" />
              </div>
            </div>

            <div>
              <h1 className="text-3xl text-center">Datos biometricos</h1>
              <div className="flex justify-center items-center gap-3">
                <PieGrafic data={diagnostic_weight} title="Peso" />
                <PieGrafic data={dataHeight} title="Talla" />
                <PieGrafic data={diagnostic_age} title="Edades" />
              </div>
            </div>

            <div>
              <h1 className="text-3xl text-center">Signos vitales</h1>
              <div className="flex justify-center items-center gap-3">
                <PieGrafic data={dataTemperature} title="Temperatura" />
                <PieGrafic data={dataSaturation} title="Saturacion" />
              </div>
            </div>

            <div>
              <h1 className="text-3xl text-center">Habitos</h1>

              <div className="flex justify-center items-center gap-3">
                <PieGrafic data={diagnostic_smoke} title="Fuma" />

                <div style={{ width: "300px", height: 200 }}>
                  <h2 className="text-2xl text-center">Covid</h2>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                      <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={dataCovid}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                      />
                      <Pie
                        dataKey="value"
                        data={dataCovid}
                        cx={500}
                        cy={200}
                        innerRadius={40}
                        outerRadius={80}
                        fill="#82ca9d"
                      />
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div style={{ width: "300px", height: 200 }}>
                  <h2 className="text-2xl text-center">Alcohol</h2>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                      <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={dataAlcohol}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                      />
                      <Pie
                        dataKey="value"
                        data={dataAlcohol}
                        cx={500}
                        cy={200}
                        innerRadius={40}
                        outerRadius={80}
                        fill="#82ca9d"
                      />
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-center">Diagnosticos</h2>
              <div className="flex justify-center items-center gap-3">
                <Cartesian
                  data={diagnostic_hemogram_gb}
                  title="Globulos blancos"
                />
                <PieGrafic data={diagnostic_rx} title="Rx" />
                <Cartesian
                  data={diagnostic_hemogram_gr}
                  title="Globulos rojos"
                />
              </div>

              <div className="flex justify-center items-center gap-3">
                <Cartesian
                  data={diagnostic_hemogram_hemoglobina}
                  title="Hemoglobina"
                />
                <Cartesian
                  data={diagnostic_hemogram_hematocito}
                  title="Hematocrito"
                />
                <Cartesian
                  data={diagnostic_hemogram_vcm}
                  title="Volumen corpuscular medio"
                />
              </div>

              <div className="flex justify-center items-center gap-3">
                <Cartesian
                  data={diagnostic_hemogram_hemoglobina}
                  title="Hemoglobina"
                />
                <Cartesian
                  data={diagnostic_hemogram_hematocito}
                  title="Hematocrito"
                />
                <Cartesian
                  data={diagnostic_hemogram_vcm}
                  title="Volumen corpuscular medio"
                />
              </div>

              <div className="flex justify-center items-center gap-3">
                <Cartesian
                  data={diagnostic_hemogram_cm}
                  title="Hemoglobina Corpuscular media"
                />
                <Cartesian
                  data={diagnostic_hemogram_m}
                  title="Concentración de Hemoglobina"
                />
                <Cartesian
                  data={diagnostic_hemogram_neutrofilos_segmentados}
                  title="Neutrofilos segmentados"
                />
              </div>

              <div className="flex justify-center items-center gap-3">
                <Cartesian
                  data={diagnostic_hemogram_eosinofilos}
                  title="Eosinofilos"
                />
                <Cartesian
                  data={diagnostic_hemogram_linfositos}
                  title="Linfonsitos"
                />
                <Cartesian
                  data={diagnostic_hemogram_monocitos}
                  title="Monocitos"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Landing;
