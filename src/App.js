import "./App.css";
import Button from "./component/Button";
import ButtonGroup from "./component/ButtonGroup";
import List from "./component/list/List";
import ShapeOne from "./component/list/ShapeOne";
import ShapeTwo from "./component/list/Shape-Two";

function App() {
  const userData = [
    { id: "1", name: "abbass", email: "abbass@abbass", age: "30" },
    { id: "2", name: "nadine", email: "nadine@nadine", age: "25" },
    { id: "3", name: "houssen", email: "houssen@houssen", age: "23" },
    { id: "4", name: "mahdi", email: "mahdi@mahdi", age: "18" },
  ];
  return (
    <div className="App">
      <Button>test1</Button>

      <ButtonGroup>
        <Button>test2</Button>
        <Button>test3</Button>
        <Button>test4</Button>
      </ButtonGroup>

      <List items={userData}>
        <ShapeTwo />
      </List>
    </div>
  );
}

export default App;
