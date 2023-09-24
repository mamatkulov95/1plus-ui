interface ButtonProps {
  text: string;
  width?: string;
  background: string;
  paddingTop: string;
  paddingRight: string;
  paddingBottom: string;
  paddingLeft: string;
  borderRadius: string;
  border: string;
  fontSize: string;
}

const BtnElement: React.FC<ButtonProps> = ({
  text,
  width,
  background,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  borderRadius,
  border,
  fontSize
}) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        width: width || "auto",
        background: background || "",
        paddingTop: paddingTop || "0",
        paddingRight: paddingRight || "0",
        paddingBottom: paddingBottom || "0",
        paddingLeft: paddingLeft || "0",
        borderRadius: borderRadius || "0",
        border: border || "none"
      }}
    >
      <span
        style={{
          fontSize: fontSize || "12px"
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default BtnElement;
