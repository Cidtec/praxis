import React, { Children, useEffect, useState } from "react";
import UseModal from "../../../Global/hooks/useModal";
import { ExamHemogramaDTO } from "./Dto/ExamenHemograma";
import { useForm } from "react-hook-form";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../Helpers/Firebase";
import toast, { Toaster } from "react-hot-toast";
import BtnBasic from "../../../Global/components/BtnBasic";
import FormComponent from "../../../Global/components/Form";
import Input from "../../../Global/components/input";
import BtnForm from "../../../Global/components/BtnForm";
import TableComponent from "../../../Global/components/Table";
import { schemaCreateExamHemograma } from "./Validations/FormCreateExamHemograma";
import { zodResolver } from "@hookform/resolvers/zod";
const emptyExamData: ExamHemogramaDTO = {
  id: "",
  RX: "",
  ECG: "",
  PAP: "",
  GR: "",
  GB: "",
  HB: "",
  Plaquetas: "",
  Glicemia: "",
  Colesterol: "",
  Trigliceridos: "",
};

const ExamenHemograma = () => {
  const { handleCloseModal, handleOpenModal, ShowModalJSX } = UseModal();
  const [select, setSelect] = useState<ExamHemogramaDTO | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<ExamHemogramaDTO>({
    resolver: zodResolver(schemaCreateExamHemograma),
    //defaultValues:emptyPerson,
  });
  useEffect(() => {
    reset(select || emptyExamData);
  }, [select]);

  const [examData, setExamData] = useState<ExamHemogramaDTO[]>([]);

  const examHemogramaCollection = collection(db, "Examen_Hemograma");
  const handleForm = async (data: ExamHemogramaDTO) => {
    if (!select) {
      const response = await addDoc(examHemogramaCollection, data);
      if (response) {
        toast.success("Examen creado con exito");
      } else {
        toast.error("Error al crear Examen");
      }
    } else {
      try {
        const Doc = doc(db, "Examen_Hemograma", select.id);
        await updateDoc(Doc, data as any);
        toast.success("Examen actualizado con exito");
      } catch (error) {
        toast.error("Error al actualizar");
      }
    }
    setSelect(emptyExamData)
    handleCloseModal();
    handleGetData();
  };
  const columnsTable = [
    "RX",
    "ECG",
    "PAP",
    "GR",
    "GB",
    "Hb",
    "Plaquetas",
    "Glicemia",
    "Colesterol",
    "Trigliceridos",
  ];

  const handleGetData = async () => {
    try {
      const data = await getDocs(examHemogramaCollection);
      const examData: ExamHemogramaDTO[] = data.docs.map((doc) => {
        const docData = doc.data() as ExamHemogramaDTO; // Datos del documento de Firebase
        return {
          ...docData,
          id: doc.id,
        };
      });

      setExamData(examData);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  useEffect(() => {
    handleGetData();
  }, []);

  function bodyTableJSX(children: (row: ExamHemogramaDTO) => JSX.Element) {
    return (
      <>
        {examData.map((examData) => (
          <tr key={examData.id}>
            <td className="px-6 py-4 whitespace-nowrap">{examData.RX}</td>
            <td className="px-6 py-4 whitespace-nowrap">{examData.ECG}</td>
            <td className="px-6 py-4 whitespace-nowrap">{examData.PAP}</td>
            <td className="px-6 py-4 whitespace-nowrap">{examData.GR}</td>
            <td className="px-6 py-4 whitespace-nowrap">{examData.GB}</td>
            <td className="px-6 py-4 whitespace-nowrap">{examData.HB}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {examData.Plaquetas}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{examData.Glicemia}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {examData.Colesterol}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {examData.Trigliceridos}
            </td>
            {children(examData)}
          </tr>
        ))}
      </>
    );
  }
  return (
    <>
      <div>
        <Toaster position="top-right" />
        <BtnBasic
          onClick={() => {
            //setSelect(emptyPerson)
            handleOpenModal();
          }}
          txt="Crear datos"
        />
        {ShowModalJSX(
          <>
            <FormComponent
              handleForm={handleForm}
              handleSubmit={handleSubmit}
              title="Crear titular"
            >
              <Input
                error={errors.RX}
                label="RX"
                placeholder="Ingrese RX"
                register={register("RX")}
                type="text"
              />
              <Input
                error={errors.ECG}
                label="ECG"
                placeholder="Ingrese ECG"
                register={register("ECG")}
                type="text"
              />
              <Input
                error={errors.PAP}
                label="PAP"
                placeholder="Ingrese PAP"
                register={register("PAP")}
                type="text"
              />
              <Input
                error={errors.GR}
                label="GR"
                placeholder="Ingrese GR"
                register={register("GR")}
                type="text"
              />
              <Input
                error={errors.GB}
                label="GB"
                placeholder="Ingrese GB"
                register={register("GB")}
                type="text"
              />
              <Input
                error={errors.HB}
                label="Hb"
                placeholder="Ingrese Hb"
                register={register("HB")}
                type="text"
              />
              <Input
                error={errors.Plaquetas}
                label="Plaquetas"
                placeholder="Ingrese Plaquetas"
                register={register("Plaquetas")}
                type="text"
              />
              <Input
                error={errors.Glicemia}
                label="Glicemia"
                placeholder="Ingrese Glicemia"
                register={register("Glicemia")}
                type="text"
              />
              <Input
                error={errors.Colesterol}
                label="Colesterol"
                placeholder="Ingrese Colesterol"
                register={register("Colesterol")}
                type="text"
              />
              <Input
                error={errors.Trigliceridos}
                label="Trigliceridos"
                placeholder="Ingrese Trigliceridos"
                register={register("Trigliceridos")}
                type="text"
              />
              <BtnForm msg={select?.id ? "Editar Examen" : "Crear Examen"} />
            </FormComponent>
          </>
        )}
      </div>
      <TableComponent<ExamHemogramaDTO>
        columnsTable={columnsTable}
        bodyTableJSX={bodyTableJSX}
        handleDelete={async (row) => {
          try {
            const Doc = doc(db, "Examen_Hemograma", row.id);
            await deleteDoc(Doc);
            toast.success("Examen eliminado");
          } catch (error) {
            toast.success("Error al eliminar");
          }

          handleGetData();
        }}
        handleEdit={(row) => {
          setSelect(row);
          handleOpenModal();
        }}
      />
    </>
  );
};

export default ExamenHemograma;
