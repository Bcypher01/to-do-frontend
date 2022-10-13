import Nav from "./Nav";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="container px-32 mx-auto">
      <Header />

      <h1 className="text-3xl pt-6 pb-4">Tasks</h1>
      <div className="flex">
        <div className="w-2.5/12">
          <Nav />
        </div>
        <main className="w-9/12">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
