import React, { ReactElement } from "react";
import Footer from "./Footer";
import Header from "./Header";
interface Props {
  children: ReactElement;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
