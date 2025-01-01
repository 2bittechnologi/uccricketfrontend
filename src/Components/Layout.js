import Footer from "./Footer";
import Header from "./Header";
import PhoneMenu from "./PhoneMenu";

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      {children}
      <Footer />
      <PhoneMenu />
    </>
  );
};

export default Layout;