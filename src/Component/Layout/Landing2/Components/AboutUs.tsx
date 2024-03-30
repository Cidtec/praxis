import Img from "../../../../assets/landing/AboutUs.png";
import BackgroundRight from "./BackgroundRight";
import BackgroundLeft from "./BackgroundLeft";

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-5">
        <BackgroundLeft />
        <div className="w-96 ">
          <h4 className="text-3xl font-medium tracking-tight leading-tight">
            Infórmate y cuida de tu salud en un solo clíck con MEDULA.
          </h4>
        </div>
        <BackgroundRight />
      </div>

      <section className="flex justify-around items-center">
        <div className="flex justify-center">
          <img src={Img} alt="AboutUs" width={500} height={500} />
        </div>

        <div className="w-2/4 flex justify-center">
          <div className="w-80 flex flex-col gap-5">
            <div className="w-72">
              <h2 className="text-5xl font-medium tracking-tight leading-tight">
                Monitoreamos tu salud todo el tiempo
              </h2>
            </div>
            <div className="w-64">
              <p className="text-sm">
                L o r e m i p s u m i s n o t s i m p l y r a n d o m t e x t .
                I t h a s r o o t s i n a , p i e c e o f c l a s s i c a l L a
                t i n l i t e r a t u r e f r o m 4 5 B C , m a k i n g i t o v
                e r 2 0 0 0 y e a r s o l d . R i c h a r d M c C l i n t o c k
                , a L a t i n . .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
