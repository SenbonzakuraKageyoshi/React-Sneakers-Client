import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import { BrowserRouter } from "react-router";

const App = () => {
  return (
  <BrowserRouter>
    <Layout>
      <Home/>
    </Layout>
  </BrowserRouter>
  )
}

export default App