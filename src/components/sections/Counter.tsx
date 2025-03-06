

interface counterProps {
  counter: number;
  counterTextColor: string;
  suffix: string;
  description: string;
}

const Counter: React.FC<counterProps> = ({ counter, counterTextColor="text-sortBlue", suffix, description }) => {
  return (
    <div className="relative basis-1/3 px-7 after:content-[''] after:absolute after:w-[2px] after:h-full after:left-0 after:top-0 after:bg-lightestGray first:after:hidden">
      <div className="flex gap-1.5 items-center">
        <h2 className={`font-light ` + counterTextColor}>{counter}</h2>
        <h2><span className={`font-light ` + counterTextColor}>{suffix}</span></h2>
      </div>
      <div className="text-wrap">
        <p className="text-mediumGray">{description}</p>
      </div>
    </div>
  );
};

export default Counter;
