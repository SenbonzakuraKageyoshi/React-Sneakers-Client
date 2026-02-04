import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import Profile from "../../pages/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router";
import Favorites from "../../pages/Favorites/Favorites";

const Router = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Layout>
  </BrowserRouter>
  )
}

export default Router;