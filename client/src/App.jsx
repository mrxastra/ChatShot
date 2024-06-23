import { BrowserRouter, Routes, Route } from "react-router-dom";
import {lazy, } from 'react'
import Suspense from "react";
import ProtectRoute from "./components/auth/ProtectRoute";
import NotFound from "./pages/NotFound";
import SkeletonLoading from "./components/layout/SkeletonLoading";
import Loaders from "./components/layout/Loaders";
const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/Login"))
const Chats = lazy(() => import("./pages/Chats"))
const Groups = lazy(() => import("./pages/Groups"))
const App = () =>{

  let user = true;

  return(
    <BrowserRouter>
      <Suspense fallback={<Loaders/>}>
      <Routes>
        <Route element={<ProtectRoute user={user}/>}>
          <Route path="/home" element={<Home/>} />
          <Route path="/chats" element={<Chats/>} />
          <Route path="/groups" element={<Groups/>} />
        </Route>
          <Route path="/login" element={<Login/>} />

        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;