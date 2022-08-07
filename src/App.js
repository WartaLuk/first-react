import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Container from "./components/Container/Container";
import Favorite from "./components/Favorite/Favorite";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Page404 from "./components/Page404/Page404";

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
           {/* Czy ma jakieś znaczenie co wybierzemy? */}
          {/* <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/favorite" component={Favorite} />
            <Route path="*" component={NotFound} />
          </Switch> */}
        </>
      </Container>
    </main>
  );
};

export default App;
