import { Link } from "react-router-dom";

export default function Button({
  children,
  onClick,
  disabled = false,
  IsLink = false,
  path,
  className
}) {
  return (
    <>
      {IsLink ? (
        <Link to={path}>
          <button
            disabled={disabled}
            onClick={onClick}
            className={className ? className :  "relative overflow-hidden animate-bounce px-6 py-2 my-8 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg shadow-lg hover:from-yellow-600 hover:to-orange-700 hover:scale-105 active:scale-95 text-center"}
            >
            {children}
          </button>
        </Link>
      ) : (
        <button
          disabled={disabled}
          onClick={onClick}
          className={className ? className :  "relative overflow-hidden animate-bounce px-6 py-2 my-8 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg shadow-lg hover:from-yellow-600 hover:to-orange-700 hover:scale-105 active:scale-95 text-center"}
        >
          {children}
        </button>
      )}
    </>
  );
}
