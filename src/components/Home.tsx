import { FunctionComponent } from "react";
import Navbar from "./Navbar";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <Navbar />
      <h1>Home</h1>
    </>
  );
};

export default Home;
