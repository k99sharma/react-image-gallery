// imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// importing css
import "./App.css";

// importing components
import Layout from "../../components/Layout";

// importing pages
import Home from "../Home";

// app component
function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
