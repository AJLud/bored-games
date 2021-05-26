import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Review from "./Components/Review";
import Reviews from "./Components/Reviews";
import { UserContext } from "./Contexts/UserContext.js";

function App() {
  const [user, setUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://i1.sndcdn.com/artworks-000213949780-6tc7ox-t500x500.jpg",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Reviews />
          </Route>
          <Route exact path="/Reviews/:review_id">
            <Review />
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
