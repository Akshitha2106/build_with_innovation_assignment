import { Audio } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default Spinner;
