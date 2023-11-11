import "./App.css";
import NavbarComponents from "./components/Navbar";
import ContentComponents from "./components/Content";
import "./style/style.css";

function App() {
  return (
    <div>
      <div className="myBG">
        <NavbarComponents />
        <ContentComponents />
      </div>
    </div>
  );
}

export default App;
