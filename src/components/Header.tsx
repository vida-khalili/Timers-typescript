import Button from "./UI/Button/Button";

const Header = () => {
  return (
    <header className="d-flex w-100 justify-content-around align-items-center ">
      <h1>React Timers</h1>
      <Button className="btn btn-primary">stop timer</Button>
    </header>
  );
};

export default Header;
