interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const ButtonOne: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white bg-foreground hover:bg-foreground/90 
             focus:ring-4 focus:ring-foreground/30 font-semibold rounded-lg 
             text-base px-6 py-3 transition-all duration-200 
             shadow-md hover:shadow-lg focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonOne;
