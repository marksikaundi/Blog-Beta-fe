import "./App.css";
import Layout from "./Layout";
import Header from "./components/Header";
import Post from "./components/Post";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Post />} />
        <Route path={"/login"} element={<div>Login page</div>} />
        <Route path={"/register"} element={<div>Register page</div>} />
      </Route>
    </Routes>
  );
}

export default App;
