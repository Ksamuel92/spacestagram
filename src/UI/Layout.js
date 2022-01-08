import { Fragment } from "react";
const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
