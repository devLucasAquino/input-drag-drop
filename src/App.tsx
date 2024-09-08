import { FileInput } from "./components/FileInput";

function App() {

  const onSubmit = () => {};

  return (
    <div>
      <h1 className="font-bold text-center text-white my-16 text-4xl">
        Input files Drag/Drop
      </h1>
      <form onSubmit={onSubmit} className="w-full h-72 flex justify-center items-center">
        <FileInput />
      </form>
    </div>
  )
}

export default App
