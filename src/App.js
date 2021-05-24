import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Review from "./Components/Review";
import Reviews from "./Components/Reviews";

function App() {
  return (
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
  );
}

export default App;
