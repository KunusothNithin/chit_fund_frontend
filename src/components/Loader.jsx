import { FaSpinner } from "react-icons/fa";

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white/70 backdrop-blur-sm fixed inset-0 z-50">
      <div className="text-blue-600 animate-spin text-5xl">
        <FaSpinner />
      </div>
    </div>
  );
}

export default Loader;
