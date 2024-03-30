import Logo from "../../../../assets/Landing/logo.png";

const Navbar = () => {
  return (
    <div>
      <header className="w-full flex items-center justify-around h-20">
        <div className="flex items-center">
          <img src={Logo} height={50} width={50} alt="logo" />
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
    </div>
  );
};

export default Navbar;
