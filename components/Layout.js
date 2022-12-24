import Nav from "./Nav";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="container px-8 lg:px-32 mx-auto">
      <Header />

      <div className="flex">
        <div className="hidden lg:block lg:w-2.5/12">
          <Nav />
        </div>
        <main className="w-full lg:w-9/12">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
