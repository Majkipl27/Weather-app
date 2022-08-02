import classes from "./Header.module.css"
import { useRef } from "react";

const Header = (props) => {
    const locationRef = useRef(void 0);

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAddLocation(locationRef.current.value);
        locationRef.current.value = "";
    }

    return (
      <div className={classes.main}>
        <h1>Weather tracking app</h1>
        <form onSubmit={submitHandler}>
          <input type="text" ref={locationRef} placeholder="Insert your city"/>
          <button>Submit</button>
        </form>
      </div>
    );
}

export default Header;