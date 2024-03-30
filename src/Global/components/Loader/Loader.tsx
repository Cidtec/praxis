import "./loader.css";

interface Props {
  text?: string;
  color?: string;
}

const Loader = ({ text = "Cargando...", color = "text-[#e1bc29]" }: Props) => {
  return (
    <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
      <div className="h-16">
        <span className={"loader " + color}></span>
      </div>
      <small>{text}</small>
    </div>
  );
};

export default Loader;
