import React from "react";
import Layout from "./../components/Layout/Layout";
import { useAuth } from "../context/Auth";
const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout
      title={"DoGo - Your Trusted Store for Dog Products, Toys, & Accessories"}
    >
      <h1>Home Page</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default HomePage;
