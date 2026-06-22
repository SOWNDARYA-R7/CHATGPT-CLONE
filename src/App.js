import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Chatbox from "./components/Chatbox";
import Credit from "./pages/Credits";
import Community from "./pages/Community";

function App() {
  return (
    <div className='dark:bg-gradient-to-b from-[#242124] to-[#000000] 
    dark:text-white' >
        <div className='flex h-screen w screen'>
          <Sidebar />
          <Routes>
            <Route path = '/' element={<Chatbox />}></Route>
            <Route path='/credits' element={<Credit />}></Route>
            <Route path='/community' element={<Community />}></Route>
          </Routes>
        </div>
    </div>
  );
}

export default App;
