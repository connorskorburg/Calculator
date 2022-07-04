interface ButtonProps {
  className: string;
  label: string;
  handleButtonClick: (label: KeyBoardType | OperatorType) => void;
}

const Button = ({ className, label, handleButtonClick }: ButtonProps) => {
  return (
    <button
      key={label}
      className={className}
      onClick={() => handleButtonClick(label as KeyBoardType | OperatorType)}
    >
      {label}
    </button>
  );
};

export default Button;
