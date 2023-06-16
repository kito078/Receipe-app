import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Receipe from "./pages/receipe/Receipe";
import Navbar from "./components/Navbar.js/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/recipes/:id">
            {" "}
            {/* Corrected spelling of "recipes" */}
            <Receipe />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./pages/home/Home";
// import Create from "./pages/create/Create";
// import Search from "./pages/search/Search";
// import Receipe from "./pages/receipe/Receipe";
// import Navbar from "./components/Navbar.js/Navbar";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Navbar />
//         <Switch>
//           <Route path="/">
//             <Home />
//           </Route>
//           <Route path="/create">
//             <Create />
//           </Route>
//           <Route path="/receipes/:id">
//             <Receipe />
//           </Route>
//           <Route path="/search">
//             <Search />
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
//npx json-server --watch data/db.json --port 8000
