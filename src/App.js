import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <main>
            <Header />
            <Post />
            <Post />
            <Post />
          </main>
        }
      />
      <Route path={"/login"} element={<div>Login</div>} />
      <Route path={"/register"} element={<div>Register</div>} />
    </Routes>
  );
}

export default App;
