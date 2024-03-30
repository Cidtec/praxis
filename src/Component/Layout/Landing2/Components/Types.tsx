import BackgroundLeft from "./BackgroundLeft";
import BackgroundRight from "./BackgroundRight";

const Types = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="flex flex-col justify-evenly px-16"
    >
      <div className="flex flex-row justify-between">
        <BackgroundLeft />
        <h3 className="text-5xl font-medium tracking-tight leading-tight">Tipos de examenes</h3>
        <BackgroundRight />
      </div>

      <h2>titulo</h2>

      <div className="flex flex-row justify-between">
        <BackgroundLeft />
        <BackgroundRight />
      </div>
    </div>
  );
};

export default Types;
