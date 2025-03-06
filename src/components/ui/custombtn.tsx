"use client";
import Link from "next/link";

type ButtonProps = {
  type?:
    | "primary"
    | "primary-white"
    | "primary-transparent"
    | "secondary"
    | "secondary-white";
  label?: string;
  href: string;
  className?: string;
  target?: string;
};

const CustomButton: React.FC<ButtonProps> = ({
  type = "primary",
  label = "",
  href,
  className = "",
  target,
}) => {
  const buttonTypes: Record<string, string> = {
    primary:
      "text-base xl:font-semibold rounded text-white border-2 border-solid border-darkBlue bg-darkBlue p-[12px] px-[24px] transition-all duration-500 hover:bg-white hover:text-darkBlue",
    "primary-white":
      "text-base xl:font-semibold rounded text-darkBlue border-2 border-solid border-white bg-white p-[12px] px-[24px] transition-all duration-500 hover:bg-transparent hover:text-white",
    "primary-transparent":
      "text-base xl:font-semibold rounded text-white border-2 border-solid border-darkBlue bg-darkBlue p-[12px] px-[24px] transition-all duration-500 hover:bg-white hover:text-darkBlue",
    secondary:
      "text-base xl:font-semibold rounded text-darkBlue border-2 border-solid border-darkBlue bg-transparent p-[12px] px-[24px] transition-all duration-500 hover:bg-darkBlue hover:text-white",
    "secondary-white":
      "text-base xl:font-semibold rounded text-white border-2 border-solid border-white bg-transparent p-[12px] px-[24px] transition-all duration-500 hover:bg-white hover:text-darkBlue",
  };

  return (
    <>
      {
        <Link
          href={href}
          target={target}
          className={`group relative inline-block ${
            buttonTypes[type] || buttonTypes.primary
          } ${className}`}
        >
          {label}
        </Link>
      }
    </>
  );
};

export default CustomButton;
