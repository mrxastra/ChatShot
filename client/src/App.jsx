import { BrowserRouter, Routes, Route } from "react-router-dom";
import {lazy} from 'react'
import ProtectRoute from "./components/auth/ProtectRoute";
import NotFound from "./pages/NotFound";
const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/Login"))
const Chats = lazy(() => import("./pages/Chats"))
const Groups = lazy(() => import("./pages/Groups"))
const App = () =>{

  let user = true;

  return(
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectRoute user={user}/>}>
          <Route path="/home" element={<Home/>} />
          <Route path="/chats" element={<Chats/>} />
          <Route path="/groups" element={<Groups/>} />
        </Route>
        <Route element={<ProtectRoute user={user}/>}>
          <Route path="/login" element={<Login/>} />
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;