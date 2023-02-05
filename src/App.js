import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout"
import HomePage from "./components/home-page/HomePage";
import NotFoundPage from './components/not-found/NotFoundPage';
function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
