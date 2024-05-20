/* eslint-disable react/prop-types */
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100 auto",
};
const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#8e44ad"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
