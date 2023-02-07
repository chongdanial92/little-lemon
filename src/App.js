import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout"
import HomePage from "./components/home-page/HomePage";
import NotFoundPage from './components/not-found/NotFoundPage';
import BookingPage from "./components/booking/BookingPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/booking' element={<BookingPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
