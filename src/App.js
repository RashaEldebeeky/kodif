import myData from "./assets/data.json";
import Components from "./Components";

function App() {
  return (
    <div className="App">
      <Components components={myData.views}></Components>
    </div>
  );
}
export default App;
