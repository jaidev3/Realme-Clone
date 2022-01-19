import "./App.css";
import Navbar from "./Components/Navbar";
import { Carouse } from "./Components/Carousel";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Carouse />
      <Footer />
    </div>
  );
}

export default App;
