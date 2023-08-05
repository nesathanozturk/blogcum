import Footer from "../layouts/footer";
import Header from "../layouts/header";

const WithComponents = (WrappedComponent: React.FC) => {
  const NewComponent = () => {
    return (
      <>
        <Header />
        <WrappedComponent />
        <Footer />
      </>
    );
  };
  return NewComponent;
};
export default WithComponents;
