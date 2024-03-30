import AboutUs from "./Components/AboutUs";
import Types from "./Components/Types";
import HeaderComp from "./Components/header";

const Landing = () => {
  return (
    <div className="bg-first">
      <HeaderComp />
      <AboutUs />
      <Types />
    </div>
  );
};

export default Landing;
