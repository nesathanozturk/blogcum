import { Suspense } from "react";
import Spinner from "../components/Spinner";

const WithLoading = (WrappedComponent: React.FC) => {
  const NewComponent = () => {
    return (
      <>
        <Suspense fallback={<Spinner />}>
          <WrappedComponent />
        </Suspense>
      </>
    );
  };
  return NewComponent;
};
export default WithLoading;
