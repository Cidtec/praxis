import Logo from "../../../assets/Landing/logo.png";
import ImgHeader from "../../../assets/Landing/imgHeader.png";

const Landing = () => {
  return (
    <>
      <div style={{height:"100vh"}} className="bg-first grid place-content-center">
        <header className="flex items-center justify-around">
          <div>
            <img src={Logo} alt="logo" />
            <h3>MEDULA</h3>
          </div>

          <div className="flex justify-center gap-12">
            <p className="bg-third rounded-full px-2 py-1 text-primary-50">
              Inicio
            </p>
            <p className="bg-fourth rounded-full px-2 py-1 text-primary-50">
              Mis analisis
            </p>
            <p className="bg-fifth rounded-full px-2 py-1 text-primary-50">
              Contactanos
            </p>
          </div>

          <div>
            <p className="bg-sixth rounded-full px-3 py-1 text-primary-50">
              Registrate
            </p>
          </div>
        </header>

        <section className="flex items-center justify-evenly">
          <div>
            <h2 className="text-5xl font-medium text-center">
              Monitoreamos tu salud todo el tiempo
            </h2>
          </div>
          <div>
            <img src={ImgHeader} alt="logo" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
