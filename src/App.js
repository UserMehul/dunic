import "./App.css";
import Cards from "./components/Cards";
import ContactUs from "./components/ContactUs";
import Courses from "./components/Courses";
import GoogleMaps from "./components/GoogleMaps";
import Nav from "./components/Nav";
// import Poster from "./components/Poster";
import Profile from "./components/Profile";
import Footer from "./components/footer";
import Knowyourscore from "./components/knowyourscore";

function App() {
  return (
    <div className="App">
      <Nav />
      <Profile />
      <Knowyourscore />
      {/* <Poster /> */}
      <Courses />
      {/* <Cards /> */}
      {/* <ContactUs /> */}

      <GoogleMaps />
      <Footer />
    </div>
  );
}

export default App;
