import Layout from "./../components/Layout";
import { useEffect, useState } from "react";

const Contact = () => {
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    console.log("This is Contact Page");
  }, []);

  const handleInput = (event) => {
    setInputVal(event.target.value);
  };

  return (
    <Layout>
      <input placeholder="Enter your name" onKeyUp={handleInput} />
      <h1>Cantact with this number: 01772873232</h1>
      <p>{inputVal}</p>
    </Layout>
  );
};

export default Contact;
