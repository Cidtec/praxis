import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

export interface SidebarTab {
  name: string;
  path: string;
  color: {
    text: string;
    bg: string;
    bg_light: string;
    divide: string;
  };
}

export const SIDEBAR_TABS: SidebarTab[] = [
  {
    name: "Titular",
    path: "/titular",
    color: {
      bg: "bg-fourth",
      text: "text-fourth",
      bg_light: "bg-fourth-light",
      divide: "divide-fourth-light",
    },
  },
  {
    name: "Examen Hemograma",
    path: "/examenHemograma",
    color: {
      bg: "bg-third",
      text: "text-third",
      bg_light: "bg-third-light",
      divide: "divide-third-light",
    },
  },
  {
    name: "Examen Físico",
    path: "/examenFisico",
    color: {
      bg: "bg-fifth",
      text: "text-fifth",
      bg_light: "bg-fifth-light",
      divide: "divide-fifth-light",
    },
  },
  {
    name: "Examen Químico",
    path: "/examenQuimico",
    color: {
      bg: "bg-seventh",
      text: "text-seventh",
      bg_light: "bg-seventh-light",
      divide: "divide-seventh-light",
    },
  },
  {
    name: "Examen Microscópico",
    path: "/examenMicroscopico",
    color: {
      bg: "text-sixth",
      text: "text-sixth",
      bg_light: "bg-sixth-light",
      divide: "divide-sixth-light",
    },
  },
];

interface SidebarContextValue {
  active: SidebarTab;
  setActive: React.Dispatch<React.SetStateAction<SidebarTab>>;
}

interface Props {
  children: React.ReactNode;
}

const Ctx = createContext<SidebarContextValue | null>(null);

export const SidebarContext = ({ children }: Props) => {
  const [active, setActive] = useState<SidebarTab>(SIDEBAR_TABS[0]);
  const { pathname } = useLocation();

  useEffect(() => {
    const actual = SIDEBAR_TABS.find((tab) => tab.path === pathname);
    if (actual) {
      setActive(actual);
    }
  }, [pathname]);

  const value = useMemo<SidebarContextValue>(
    () => ({
      active,
      setActive,
    }),
    [active, setActive]
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export const useSidebarContext = () => {
  const context = useContext(Ctx);
  if (!context) {
    throw new Error(
      "useSidebarContext debe usarse dentro de un SidebarContext"
    );
  }
  return context;
};
