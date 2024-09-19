import { useContext } from "react";
import UserContext from "../utils/UserContext";
import CounterItem from "./CounterItem";

const About = () => {

    const {loggedIn} = useContext(UserContext)
    return (
      <div>
        <h1>About</h1>
        <h2 className="font-bold">{loggedIn}</h2>

        <CounterItem></CounterItem>
      </div>
    );
}

export default About;