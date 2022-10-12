import Nav from "./Nav";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="container px-32 mx-auto">
      <Header />
      <div className="flex">
        <div className="w-3/12">
          <Nav />
        </div>
        <main className="w-9/12">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
