import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CryptoNews from "./components/News/CryptoNews";
import TechnologyNews from "./components/News/TechnologyNews";
import Education from "./components/News/Education";
import Politics from "./components/News/Politics";
import Sports from "./components/News/Sports";
import Financial from "./components/News/Financial";
import Entertainment from "./components/News/Entertainment";
import EditNews from "./pages/EditNews";
import PostedNewsItem from "./pages/PostedNewsItem";
import AddNews from "./pages/AddNews";
import UserProfile from "./pages/UserProfile";
import NewsArtical from "./components/News/publisher/NewsArtical";
import Chatbot from "./components/ChatBot/Chatbot";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import Weather from "./components/Weather/Weather";
import PageNotFound from "./components/error/PageNotFound";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userprofile" element={<PrivateRoute />}>
            <Route path="/userprofile" element={<UserProfile />} />
          </Route>
          <Route path="/addnews" element={<PrivateRoute />}>
            <Route path="/addnews" element={<AddNews />} />
          </Route>
          <Route path="/postednews" element={<PrivateRoute />}>
            <Route path="/postednews" element={<PostedNewsItem />} />
          </Route>
          <Route path="/editnews/:newsid" element={<PrivateRoute />}>
            <Route path="/editnews/:newsid" element={<EditNews />} />
          </Route>
          <Route path="/technology" element={<PrivateRoute />}>
            <Route path="/technology" element={<TechnologyNews />} />
          </Route>
          <Route path="/politics" element={<PrivateRoute />}>
            <Route path="/politics" element={<Politics />} />
          </Route>
          <Route path="/sports" element={<PrivateRoute />}>
            <Route path="/sports" element={<Sports />} />
          </Route>
          <Route path="/financial" element={<PrivateRoute />}>
            <Route path="/financial" element={<Financial />} />
          </Route>
          <Route path="/entertainment" element={<PrivateRoute />}>
            <Route path="/entertainment" element={<Entertainment />} />
          </Route>
          <Route path="/education" element={<PrivateRoute />}>
            <Route path="/education" element={<Education />} />
          </Route>
          <Route path="/crypto" element={<PrivateRoute />}>
            <Route path="/crypto" element={<CryptoNews />} />
          </Route>
          <Route path="/newsartical/:newsid" element={<NewsArtical />} />
          <Route path="/" element={<Chatbot />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <ScrollUpButton />
      <ToastContainer />
    </div>
  );
}

export default App;
