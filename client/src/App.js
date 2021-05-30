import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Container>Hello world</Container>
    </div>
  );
};

export default App;
