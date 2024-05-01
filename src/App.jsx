import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <Nav />
      <div className="min-h-[calc(100vh-400px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
