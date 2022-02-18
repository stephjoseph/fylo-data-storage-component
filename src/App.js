import "./index.css";
import Files from "./components/Files";
import Storage from "./components/Storage";

function App() {
  return (
    <main className="App mx-auto mt-[7.938rem] flex h-[25.813rem] w-[20.375rem] flex-col gap-4">
      <Files />
      <Storage />
    </main>
  );
}

export default App;
