import { VotePage } from "./Pages/VotePage";

//--------------------------------------------------------------------------------the definition of the base URL

export const baseUrl:string = process.env.NODE_ENV === "production"
? "FILLL IN"
: "http://localhost:4000/"


// {
//   const keepingThis = "https://images.dog.ceo/breeds/"
//   const randomImageURL = "https://dog.ceo/api/breeds/image/random"
// }




function App(): JSX.Element {

  return (
    <VotePage />
  );
}

export default App;
