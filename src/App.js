import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route
        index element={
          <main>
            <Header />
            <Post />
            <Post />
            <Post />
          </main>
        }
      />
    </Routes>
  );
}

export default App;
