import AddTimer from "./components/AddTimer";
import Header from "./components/Header";
import Container from "./components/UI/Container/Container";
import "./styles/app.css";
function App() {
  return (
    <Container className="app w-75 p-3 bg-green-800 mx-auto rounded ">
      <Header />
      <AddTimer />
    </Container>
  );
}

export default App;
