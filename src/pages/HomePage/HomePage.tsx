import Input from "../../components/Input";
import FetchDataSection from "./FetchDataSection";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Input />
        <FetchDataSection />
      </main>
    </>
  );
};

export default HomePage;
