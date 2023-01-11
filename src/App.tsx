import { VotePage } from "./Pages/VotePage";
import "./App.css";
import { LeaderboardPage } from "./Pages/LeaderboardPage";
import { NavLink, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

//-------------------------------------------------------------------------------the definition of the base URL

export const baseUrl: string =
  process.env.NODE_ENV === "production"
    ? "https://dog-voting-db.onrender.com/"
    : "http://localhost:4000/";

// {
//   const keepingThis = "https://images.dog.ceo/breeds/"
//   const randomImageURL = "https://dog.ceo/api/breeds/image/random"
// }

//-------------------------------------------------------------------------------Main content
function App(): JSX.Element {
  return (
    <div className="app">
      {/* //---------------------------------------------------------------------------Header */}
      <h1>Dog Voting App</h1>

      {/* //---------------------------------------------------------------------------Navbar */}

      <nav className="navbar">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "active-nav-link" : "inactive-nav-link"
          }
        >
          Vote
        </NavLink>
        <NavLink
          to={"/leaderboard"}
          className={({ isActive }) =>
            isActive ? "active-nav-link" : "inactive-nav-link"
          }
        >
          Leaderboard
        </NavLink>
        {/* Add Links here */}
      </nav>

      {/* <NavLink
            to="messages"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Messages
          </NavLink>  */}

      {/* //---------------------------------------------------------------------------Routing */}

      <Routes>
        <Route path="/" element={<VotePage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
