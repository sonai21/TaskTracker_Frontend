import Task from "./components/task/Task";
import Home from "./pages/home/Home";
import NewTask from "./pages/newTask/NewTask";
import Tasks from "./pages/tasks/Tasks";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/create" element={<NewTask />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
