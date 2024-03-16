import { useForm } from "react-hook-form";
import BtnForm from "../../../Global/components/BtnForm";
import FormComponent from "../../../Global/components/Form";
import UseModal from "../../../Global/hooks/useModal";
import { PersonDTO } from "./Dto/Person";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaCreatePerson } from "./Validations/FormCreatPerson";
import Input from "../../../Global/components/input";
import BtnBasic from "../../../Global/components/BtnBasic";
import TableComponent from "../../../Global/components/Table";
import { ReactNode, useEffect, useState } from "react";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../Helpers/Firebase";
import toast, { Toaster } from "react-hot-toast";

const emptyPerson: PersonDTO = {
  id: "",
  nombres: "",
  apellidoPaterno: "",
  apellidoMaterno: "",
  ciTitular: "",
  codigoTitular: "",
  sexo: "",
  fechaIngresoRamo: "",
  fechaInclusion: "",
  año: 0,
  area: "",
  fechaNacimiento: "",
  edadActual: 0,
  ciudad: "",
  peso: 0,
  talla: 0,
  imc: 0,
  pa: "",
  saturacion: 0,
};
const Person = () => {
  const { ShowModalJSX, handleCloseModal, handleOpenModal } = UseModal();
  const [select, setSelect] = useState<PersonDTO | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<PersonDTO>({
    resolver: zodResolver(schemaCreatePerson),
    //defaultValues:emptyPerson,
  });

  useEffect(() => {
    reset(select || emptyPerson);
  }, [select]);

  const [owners, setOwners] = useState<PersonDTO[]>([]);

  const ownerCollection = collection(db, "Titular");
  const handleForm = async (data: PersonDTO) => {
    console.log(data)
    if (!select) {
      const response = await addDoc(ownerCollection, data);
      if (response) {
        toast.success("Usuario creado con exito");
      } else {
        toast.error("Error al crear usuario");
      }
    } else {
      try {
        const Doc = doc(db, "Titular", select.id);
        await updateDoc(Doc, data as any);
        toast.success("Usuario actualizado con exito")
      } catch (error) {
        toast.error("Error al actualizar")
      }
    }
    setSelect(emptyPerson)
    handleCloseModal();
    handleGetData();
  };

  const columnsTable = [
    "Nombres",
    "Apellido Paterno",
    "Apellido Materno",
    "C.I Titular",
    "Codigo Titular",
    "Sexo",
    "Fecha Ingreso Ramo",
    "Fecha Inclusión",
    "Año",
    "Area",
    "Fecha Nacimiento",
    "Edad Actual",
    "Ciudad",
    "Peso",
    "Talla",
    "IMC",
    "PA",
    "Saturación",
  ];

  const handleGetData = async () => {
    try {
      const data = await getDocs(ownerCollection);
      const ownersData: PersonDTO[] = data.docs.map((doc) => {
        const docData = doc.data() as PersonDTO; // Datos del documento de Firebase
        
        return {
          ...docData,
          id: doc.id,
        };
      });

      setOwners(ownersData);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);


  function bodyTableJSX(children: (row: PersonDTO) => JSX.Element) {
    console.log(owners)
    return (
      <>
        {owners.length>0 && owners.map((owner) => (
          <tr key={owner.apellidoPaterno}>
            <td className="px-6 py-4 whitespace-nowrap">{owner.nombres}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {owner.apellidoMaterno}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {owner.apellidoPaterno}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{owner.ciTitular}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {owner.codigoTitular}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{owner.sexo}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {owner.fechaIngresoRamo}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {owner.fechaInclusion}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{owner.año}</td>
            <td className="px-6 py-4 whitespace-nowrap">{owner.area}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {owner.fechaNacimiento}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{owner.edadActual}</td>
            <td className="px-6 py-4 whitespace-nowrap">{owner.ciudad}</td>
            <td className="px-6 py-4 whitespace-nowrap">{owner.peso}</td>
            <td className="px-6 py-4 whitespace-nowrap">{owner.talla}</td>
            <td className="px-6 py-4 whitespace-nowrap">{owner.imc}</td>
            <td className="px-6 py-4 whitespace-nowrap">{owner.pa}</td>
            <td className="px-6 py-4 whitespace-nowrap">{owner.saturacion}</td>
            {children(owner)}
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
            setSelect(null)
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
                error={errors.nombres}
                label="Nombre"
                placeholder="Carlos"
                register={register("nombres")}
                type="text"
              />

              <Input
                error={errors.apellidoPaterno}
                label="Apellido Paterno"
                placeholder="Villaroel"
                register={register("apellidoPaterno")}
                type="text"
              />

              <Input
                error={errors.apellidoMaterno}
                label="Apellido Materno"
                placeholder="Salva"
                register={register("apellidoMaterno")}
                type="text"
              />

              <Input
                error={errors.ciTitular}
                label="C.I Titular"
                placeholder="Carnet de Identidad"
                register={register("ciTitular")}
                type="text"
              />

              <Input
                error={errors.codigoTitular}
                label="Código Titular"
                placeholder="Código"
                register={register("codigoTitular")}
                type="text"
              />

              <Input
                error={errors.sexo}
                label="Sexo"
                placeholder="Sexo"
                register={register("sexo")}
                type="text"
              />

              <Input
                error={errors.fechaIngresoRamo}
                label="Fecha Ingreso Ramo"
                placeholder="Fecha"
                register={register("fechaIngresoRamo")}
                type="text"
              />

              <Input
                error={errors.fechaInclusion}
                label="Fecha Inclusión"
                placeholder="Fecha"
                register={register("fechaInclusion")}
                type="text"
              />

              <Input
                error={errors.año}
                label="Año"
                placeholder="Año"
                register={register("año")}
                type="number"
              />

              <Input
                error={errors.area}
                label="Área"
                placeholder="Área"
                register={register("area")}
                type="text"
              />

              <Input
                error={errors.fechaNacimiento}
                label="Fecha Nacimiento"
                placeholder="Fecha"
                register={register("fechaNacimiento")}
                type="text"
              />

              <Input
                error={errors.edadActual}
                label="Edad Actual"
                placeholder="Edad"
                register={register("edadActual")}
                type="number"
              />

              <Input
                error={errors.ciudad}
                label="Ciudad"
                placeholder="Ciudad"
                register={register("ciudad")}
                type="text"
              />

              <Input
                error={errors.peso}
                label="Peso"
                placeholder="Peso"
                register={register("peso")}
                type="number"
              />

              <Input
                error={errors.talla}
                label="Talla"
                placeholder="Talla"
                register={register("talla")}
                type="number"
              />

              <Input
                error={errors.imc}
                label="IMC"
                placeholder="IMC"
                register={register("imc")}
                type="number"
              />

              <Input
                error={errors.pa}
                label="PA"
                placeholder="PA"
                register={register("pa")}
                type="text"
              />

              <Input
                error={errors.saturacion}
                label="Saturación"
                placeholder="Saturación"
                register={register("saturacion")}
                type="number"
              />

              <BtnForm msg={select?.id ? "Editar titular" : "Crear titular"} />
            </FormComponent>
          </>
        )}
      </div>

      <TableComponent<PersonDTO>
        columnsTable={columnsTable}
        bodyTableJSX={bodyTableJSX}
        handleDelete={async (row) => {
          try {
            const Doc = doc(db, "Titular", row.id);
            await deleteDoc(Doc);
            toast.success("Titular eliminado");
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

export default Person;
