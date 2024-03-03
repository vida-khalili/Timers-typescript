import AddTimer from "./components/AddTimer";
import Header from "./components/Header";
import Timers from "./components/Timers";
import Container from "./components/UI/Container/Container";
import "./styles/app.css";
function App() {
  return (
    <Container className="app w-75 mx-auto  ">
      <Header />
      <AddTimer />
      <Timers />
    </Container>
  );
}

export default App;
