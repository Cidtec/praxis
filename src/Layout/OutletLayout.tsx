import React from "react";
import { Toaster } from "react-hot-toast";
import { useSidebarContext } from "./DefaultLayoutContext";
import BtnBasic from "../Global/components/BtnBasic";

interface Props {
  children: React.ReactNode;
  onCreate?: () => void;
  onReport?: () => void;
}

const OutletLayout = ({ children, onCreate, onReport }: Props) => {
  const { active } = useSidebarContext();
  const titleClasses = ["text-3xl font-bolder"];
  titleClasses.push(active.color.text);
  return (
    <div className="flex flex-col gap-4 h-full w-full overflow-hidden">
      <div className="flex w-full justify-between">
        <h2 className={titleClasses.join(" ")}>{active.name}</h2>
        <div className="flex gap-3">
          {onCreate && <BtnBasic onClick={onCreate} txt="Crear datos" />}
          {onReport && <BtnBasic onClick={onReport} txt="Generar reporte" />}
        </div>
      </div>
      {children}
      <Toaster position="top-right" />
    </div>
  );
};

export default OutletLayout;
