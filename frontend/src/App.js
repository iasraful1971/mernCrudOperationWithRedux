import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Edit from "./component/Edit";
import { SingleView } from "./component/SingleView";
import Home from "./pages/Home";
function App() {
  return (
   <>
        <BrowserRouter>
          <Routes>
        
            <Route path="/" element={  <Home/> } />
            <Route path="home/:currentPage" element={  <Home/> } />
            <Route path="/" element={<Navigate to="home/page-1"><Home/></Navigate>} />
            <Route path="view/:id" element={<SingleView/>} />
            <Route path="edit/:id" element={<Edit/>} />
          </Routes>
        </BrowserRouter>
   </>
  );
}

export default App;
