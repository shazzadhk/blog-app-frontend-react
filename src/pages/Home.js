import Layout from "./../components/Layout";
import { useContext } from "react";
import UserContext from "./../context/UserContext";

const Home = () => {
  const contextData = useContext(UserContext);
  return (
    <Layout>
      <h1>This is Home Page</h1>
      <p>Welcome Back {contextData?.user?.data?.name}</p>
    </Layout>
  );
};

export default Home;
