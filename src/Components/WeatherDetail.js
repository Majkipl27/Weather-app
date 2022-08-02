import classes from "./WeatherDetail.module.css";

const WeatherDetail = (props) => {
    return (
      <div className={classes.card}>
        <h3>{props.city}</h3>
        <p>{props.temperature}</p>
        <p>{props.pressure}</p>
        <p>
          <img
            src={props.icon}
            alt=""
          />
        </p>
        <p>{props.weatherStatus || "No data!"}</p>
      </div>
    );
}

export default WeatherDetail;