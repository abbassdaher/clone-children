import "./App.css";
import Button from "./component/Button";
import ButtonGroup from "./component/ButtonGroup";

function App() {
  return (
    <div className="App">
      <Button>test1</Button>

      <ButtonGroup>
        <Button>test2</Button>
        <Button>test3</Button>
        <Button>test4</Button>


      </ButtonGroup>
    </div>
  );
}

export default App;
