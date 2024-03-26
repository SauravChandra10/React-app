import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "danger" | "success";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "success" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
