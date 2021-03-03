import "bootswatch/dist/sandstone/bootstrap.css";
import NavBar from "./components/navbar";
import "./custom.css";
import Routes from "./main/routes";

function App() {
  return (
    <div>
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
