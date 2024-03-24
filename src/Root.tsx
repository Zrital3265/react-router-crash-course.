import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />{" "}
      {/* top header and bottom footer will be the same and only where the outlet is declared will gonna get changed */}
      <Footer />
    </>
  );
};

export default Root;
