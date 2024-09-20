import { useContext } from "react";
import UserContext from "../utils/UserContext";


const About = () => {

    const {loggedIn} = useContext(UserContext)
    return (
      <div>
        <h1>About</h1>
        <h2 className="font-bold">{loggedIn}</h2>

      
      </div>
    );
}

export default About;