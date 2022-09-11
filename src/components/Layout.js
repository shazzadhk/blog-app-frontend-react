import NavigationMenu from "./NavigationMenu";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid p-0 m-0">
      <NavigationMenu />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
