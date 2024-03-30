import { useSidebarContext } from "../../Layout/DefaultLayoutContext";

interface Props {
  onClick: () => void;
  txt: string;
}
const BtnBasic = ({ onClick, txt }: Props) => {
  const { active } = useSidebarContext();
  const classNames = [
    "px-4 py-2 text-white rounded-lg transition-all duration-300 hover:invert-[8%]",
  ];
  classNames.push(active.color.bg);
  return (
    <button onClick={onClick} className={classNames.join(" ")}>
      {txt}
    </button>
  );
};

export default BtnBasic;
