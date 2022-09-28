import UserContext from "../context/UserContext";
import Layout from "./../components/Layout";

const About = () => {
  return (
    <UserContext.Consumer>
      {(object) => (
        <Layout>
          <h1>This is About Page</h1>
          <p>You can find all details of this project in this page</p>
          <p>djfsdkjf</p>
          <p>{object.user.login}</p>
          <p>{object?.user?.login && object?.user?.data?.user?.name}</p>
        </Layout>
      )}
    </UserContext.Consumer>
  );
};
export default About;
