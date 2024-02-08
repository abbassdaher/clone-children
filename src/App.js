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
  const data = [
    {
      componentName: ShapeOne,
      data: { id: "1", name: "abbass", email: "abbass@abbass", age: "30" }
    },
    {
      componentName: ShapeTwo,
      data: { id: "2", name: "nadine", email: "nadine@nadine", age: "25" },
    },
  ];

  const child = data.map((el) => {
    console.log(el.data);
    return <el.componentName item={el.data}/>;
  });
  return (
    <div className="App">
    {child}
       <Button>test1</Button>
      <ButtonGroup>
        <Button>test2</Button>
        <Button>test3</Button>
        <Button>test4</Button>
      </ButtonGroup>

      <List items={userData}>
        <ShapeTwo />
      </List>
      <List items={userData}>
        <ShapeOne />
      </List>
    </div>

  );
}

export default App;
