interface Props {}
const BackgroundLeft = ({}: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <span className="bg-fourth block h-6 w-72 rounded-full self-end"></span>
      <span className="bg-third block h-6 w-64 rounded-full self-end"></span>
      <span className="bg-seventh block h-6 w-60 rounded-full self-end"></span>
    </div>
  );
};

export default BackgroundLeft;
