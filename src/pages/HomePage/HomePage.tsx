import Input from "../../components/Input";
import FetchDataSection from "./FetchDataSection";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <div className="xl:m-auto xl:max-w-3xl">
      <header>
        <NavBar />
      </header>
      <main>
        <Input />
        <FetchDataSection />
      </main>
    </div>
  );
};

export default HomePage;
