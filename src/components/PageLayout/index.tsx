import React, { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { Layout, Wrapper } from "./styles";

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Wrapper>
        {children}

        <Outlet />
      </Wrapper>
      <Footer />
    </Layout>
  );
};

export default PageLayout;
