import { use, useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faSearch } from "@fortawesome/free-solid-svg-icons";
//8b4d547f76f22a72a59e4b574ba192ef
function App() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");
  let [error, setError] = useState(false);
  let [isLoading, setIsLoading] = useState(false);

  let handleChange = (e) => {
    let input = e.target.value;
    setCity(input);
  };

  let api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8b4d547f76f22a72a59e4b574ba192ef&units=metric`;

  let handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let res = await fetch(api);
    let data = await res.json();
    if (data.cod == "404") {
      setWeather("");
      setError(true);
    } else {
      setWeather(data);
      setCity("");
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search City"
            value={city}
            onChange={handleChange}
          />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <img
          className="loading"
          src="https://www.lucylooandroo.com/cdn/shop/t/6/assets/loading.gif?v=135655685998696985211639013649"
          hidden={!isLoading}
        />
        {weather !== "" ? (
          <>
            <div className="cityName">
              <h2>{weather.name}</h2> <span>{weather.sys.country}</span>
            </div>
            <div className="icon">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              />
            </div>
            <div className="weather">
              <h1>{Math.floor(weather.main.temp)}°C</h1>
              <p>{weather.weather[0].description}</p>
            </div>
          </>
        ) : (
          <p style={{ margin: 10 }} hidden={!error}>
            no data found
          </p>
        )}
      </div>
    </>
  );
}

export default App;
