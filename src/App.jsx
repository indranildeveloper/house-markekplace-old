import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import {
  Explore,
  Offers,
  Profile,
  Login,
  Register,
  ForgotPassword,
} from "./pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
