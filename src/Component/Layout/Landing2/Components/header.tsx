import ImgHeader from "../../../../assets/Landing/imgHeader.png";
import Navbar from "./navbar";

const HeaderComp = () => {
  return (
    <div style={{ height: "100vh" }} className="bg-first grid">
      <Navbar />
      <div>
        <section className="flex items-center justify-between w-full">
          <div className="w-full flex justify-center">
            <div className="w-80 flex flex-col gap-5">
              <div className="w-72">
                <h2 className="text-5xl font-medium tracking-tight leading-tight">
                  Monitoreamos tu salud todo el tiempo
                </h2>
              </div>
              <div className="w-64">
                <p className="text-sm">
                  L o r e m i p s u m i s n o t s i m p l y r a n d o m t e x t
                  . I t h a s r o o t s i n a , p i e c e o f c l a s s i c a l
                  L a t i n l i t e r a t u r e f r o m 4 5 B C , m a k i n g i
                  t o v e r 2 0 0 0 y e a r s o l d . R i c h a r d M c C l i n
                  t o c k , a L a t i n . .
                </p>
              </div>
              <div>
                <button className="bg-third px-2 py-1 text-white rounded-full">
                  Quiero saber mas
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <img src={ImgHeader} width={1200} height={1200} alt="logo" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeaderComp;
