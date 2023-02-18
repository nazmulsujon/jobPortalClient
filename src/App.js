import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes/Routes";

function App() {
  return (
    <section className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </section>
  );
}

export default App;
