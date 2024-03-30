import React, { useEffect, useState } from "react";
import { ExamFisicoDTO } from "./Dto/ExamFisico";
import UseModal from "../../../Global/hooks/useModal";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaCreateExamFisico } from "./Validations/FormCreateExamFisico";
import OutletLayout from "../../../Layout/OutletLayout";

const emptyExamData: ExamFisicoDTO = {
  id: "",
  Olor: "",
  Color: "",
  Aspecto: "",
  Densidad: "",
  PH: "",
};
const ExamenFisico = () => {
  const { handleCloseModal, handleOpenModal, ShowModalJSX } = UseModal();
  const [select, setSelect] = useState<ExamFisicoDTO | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<ExamFisicoDTO>({
    resolver: zodResolver(schemaCreateExamFisico),
    //defaultValues:emptyPerson,
  });
  useEffect(() => {
    reset(select || emptyExamData);
  }, [select]);

  const [examData, setExamData] = useState<ExamFisicoDTO[]>([]);

  const examFisicoCollection = collection(db, "Examen_Fisico");
  const handleForm = async (data: ExamFisicoDTO) => {
    console.log(data);
    if (!select) {
      const response = await addDoc(examFisicoCollection, data);
      if (response) {
        toast.success("Examen creado con exito");
      } else {
        toast.error("Error al crear Examen");
      }
    } else {
      try {
        const Doc = doc(db, "Examen_Fisico", select.id);
        await updateDoc(Doc, data as any);
        toast.success("Examen actualizado con exito");
      } catch (error) {
        toast.error("Error al actualizar");
      }
    }
    setSelect(emptyExamData);
    handleCloseModal();
    handleGetData();
  };

  const columnsTable = ["Olor", "Color", "Aspecto", "Densidad", "PH"];

  const handleGetData = async () => {
    try {
      setLoading(true);
      const data = await getDocs(examFisicoCollection);
      const examData: ExamFisicoDTO[] = data.docs.map((doc) => {
        const docData = doc.data() as ExamFisicoDTO; // Datos del documento de Firebase
        return {
          ...docData,
          id: doc.id,
        };
      });

      setExamData(examData);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleGetData();
  }, []);

  function bodyTableJSX(children: (row: ExamFisicoDTO) => JSX.Element) {
    return (
      <>
        {examData.map((examData) => (
          <tr className="even:bg-white odd:bg-[#f5f5f5]" key={examData.id}>
            <td className="px-6 py-4 whitespace-nowrap">{examData.Olor}</td>
            <td className="px-6 py-4 whitespace-nowrap">{examData.Color}</td>
            <td className="px-6 py-4 whitespace-nowrap">{examData.Aspecto}</td>
            <td className="px-6 py-4 whitespace-nowrap">{examData.Densidad}</td>
            <td className="px-6 py-4 whitespace-nowrap">{examData.PH}</td>
            {children(examData)}
          </tr>
        ))}
      </>
    );
  }

  return (
    <OutletLayout
      onCreate={() => {
        setSelect(null);
        handleOpenModal();
      }}
    >
      <TableComponent<ExamFisicoDTO>
        loading={loading}
        columnsTable={columnsTable}
        bodyTableJSX={bodyTableJSX}
        handleDelete={async (row) => {
          try {
            const Doc = doc(db, "Examen_Fisico", row.id);
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
      {ShowModalJSX(
        <>
          <FormComponent
            handleForm={handleForm}
            handleSubmit={handleSubmit}
            title="Crear Examen"
          >
            <Input
              error={errors.Olor}
              label="Olor"
              placeholder="Ingrese el olor"
              register={register("Olor")}
              type="text"
            />

            <Input
              error={errors.Color}
              label="Color"
              placeholder="Ingrese el color"
              register={register("Color")}
              type="text"
            />

            <Input
              error={errors.Aspecto}
              label="Aspecto"
              placeholder="Ingrese el aspecto"
              register={register("Aspecto")}
              type="text"
            />

            <Input
              error={errors.Densidad}
              label="Densidad"
              placeholder="Ingrese la densidad"
              register={register("Densidad")}
              type="text"
            />

            <Input
              error={errors.PH}
              label="PH"
              placeholder="Ingrese el pH"
              register={register("PH")}
              type="text"
            />

            <BtnForm msg={select?.id ? "Editar Examen" : "Crear Examen"} />
          </FormComponent>
        </>
      )}
    </OutletLayout>
  );
};

export default ExamenFisico;
