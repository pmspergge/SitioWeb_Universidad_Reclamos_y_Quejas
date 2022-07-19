import LayoutMain from "./Layout/LayoutMain";
import Form from "./Components/Form";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<LayoutMain></LayoutMain>}>
          <Route index element={<div>Hasdasdome</div>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="form" element={<Form></Form>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
