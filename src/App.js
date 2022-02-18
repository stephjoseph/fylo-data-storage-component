import "./index.css";
import Files from "./components/Files";
import Storage from "./components/Storage";

function App() {
  return (
    <main className="z-10 mx-auto mb-[7.938rem] mt-[7.938rem] flex h-[25.813rem] w-[20.375rem] flex-col gap-4 xl:mb-[19.375rem] xl:mt-[18.063rem] xl:h-[12.563rem]  xl:w-[57.5rem] xl:flex-row">
      <Files />
      <Storage />
    </main>
  );
}

export default App;
