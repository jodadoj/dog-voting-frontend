import { VotePage } from "./Pages/VotePage";
import "./App.css"

//--------------------------------------------------------------------------------the definition of the base URL

export const baseUrl: string =
  process.env.NODE_ENV === "production" ? "https://dog-voting-db.onrender.com/" : "http://localhost:4000/";

// {
//   const keepingThis = "https://images.dog.ceo/breeds/"
//   const randomImageURL = "https://dog.ceo/api/breeds/image/random"
// }

function App(): JSX.Element {
  return (
    <div className="app">
    <h1>Dog Voting App</h1>
      <VotePage />
    </div>
  );
}

export default App;
