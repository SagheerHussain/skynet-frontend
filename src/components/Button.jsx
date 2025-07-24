import { Link } from "react-router-dom";
export default function Button({
  buttonLabel,
  isWidthFull = false,
  isNormalPedding = false,
  onClick,
  isContact = false,
}) {
  return (
    <Link to={onClick} className="z-[9999]">
      <button
        className={`${
          isWidthFull ? "btn-main w-full z-[20]" : "btn-main "
        } ${
          isNormalPedding
            ? "py-[.5rem] px-[1.5rem] text-sm capitalize"
            : "py-[1rem] px-[2rem] text-base"
        } z-[9999]`}
        style={isContact ? { backgroundColor: "#ffffff3f" } : {}}
      >
        {/* Background layers */}
        <span></span>

        <span></span>

        {/* Border corners */}
        <span></span>
        <span></span>

        {/* Text */}
        {buttonLabel}
      </button>
    </Link>
  );
}
