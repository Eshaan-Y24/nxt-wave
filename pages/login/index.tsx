import React from "react";
import { Layout } from "../../components";
import { Login } from "../../features";

const LoginPage = () => {
  return (
    <Layout showAddButton={false} hideAvatar={true}>
      <Login />
    </Layout>
  );
};

export default LoginPage;
