import { use } from "react";
import HomePlants from "./HomePlants";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "./Loading";

const Plants = () => {
  const { loading } = use(AuthContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="mb-10">
      <HomePlants />
    </div>
  );
};

export default Plants;
