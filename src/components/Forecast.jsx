import { useMyContext } from "../context";

export default function Forecast() {
  const { isDarkMode, weatherData, errorMessage, loading } = useMyContext();

  const daysForecast = [
    {
      temperature: weatherData?.forecast.forecastday[0].day.avgtemp_c,
      img_src: weatherData?.forecast.forecastday[0].day.condition.icon,
      date: weatherData?.forecast.forecastday[0].date,
    },
    {
      temperature: weatherData?.forecast.forecastday[1].day.avgtemp_c,
      img_src: weatherData?.forecast.forecastday[1].day.condition.icon,
      date: weatherData?.forecast.forecastday[1].date,
    },
    {
      temperature: weatherData?.forecast.forecastday[2].day.avgtemp_c,
      img_src: weatherData?.forecast.forecastday[2].day.condition.icon,
      date: weatherData?.forecast.forecastday[2].date,
    },
  ];
  const hourlyForecast = [
    {
      hour: "09:00",
      img_src: weatherData?.forecast.forecastday[0].hour[9].condition.icon,
      temperature: weatherData?.forecast.forecastday[0].hour[9].temp_c,
      wind_speed: weatherData?.forecast.forecastday[0].hour[9].wind_kph,
    },
    {
      hour: "12:00",
      img_src: weatherData?.forecast.forecastday[0].hour[12].condition.icon,
      temperature: weatherData?.forecast.forecastday[0].hour[12].temp_c,
      wind_speed: weatherData?.forecast.forecastday[0].hour[12].wind_kph,
    },
    {
      hour: "15:00",
      img_src: weatherData?.forecast.forecastday[0].hour[15].condition.icon,
      temperature: weatherData?.forecast.forecastday[0].hour[15].temp_c,
      wind_speed: weatherData?.forecast.forecastday[0].hour[15].wind_kph,
    },
    {
      hour: "18:00",
      img_src: weatherData?.forecast.forecastday[0].hour[18].condition.icon,
      temperature: weatherData?.forecast.forecastday[0].hour[18].temp_c,
      wind_speed: weatherData?.forecast.forecastday[0].hour[18].wind_kph,
    },
    {
      hour: "21:00",
      img_src: weatherData?.forecast.forecastday[0].hour[21].condition.icon,
      temperature: weatherData?.forecast.forecastday[0].hour[21].temp_c,
      wind_speed: weatherData?.forecast.forecastday[0].hour[21].wind_kph,
    },
    {
      hour: "00:00",
      img_src: weatherData?.forecast.forecastday[0].hour[0].condition.icon,
      temperature: weatherData?.forecast.forecastday[0].hour[0].temp_c,
      wind_speed: weatherData?.forecast.forecastday[0].hour[0].wind_kph,
    },
  ];

  return (
    <>
      {errorMessage && (
        <div className="text-red-500 text-xl md:text-2xl text-center font-poppins font-bold mt-12 ml-20 mr-20">
          {errorMessage}
        </div>
      )}

      {loading && (
        <div className="text-[#000000] dark:text-[#FFFFFF] text-xl md:text-2xl text-center font-poppins font-bold mt-12 ml-20 mr-20">
          Loading...
        </div>
      )}

      {weatherData ? (
        <div className="w-full max-w-7xl mb-16 px-4 sm:px-14 lg:px-0">
          <div className="mt-11">
            <div className="gap-5 flex max-lg:flex-col max-lg:gap-0">
              <div className="w-full lg:w-2/6 flex grow ml-0 lg:ml-5">
                <div className="bg-zinc-300 dark:bg-[#444444] shadow-lg text-zinc-800 dark:text-white flex grow flex-col justify-center items-center w-full px-16 py-12 rounded-[30px] max-md:max-w-full max-md:mt-10 max-md:px-5">
                  <div className="flex flex-col items-center mt-4">
                    <div className="text-4xl font-bold self-center">
                      {weatherData.location.name}
                    </div>
                    <div className="text-7xl font-bold mt-14 max-md:text-4xl max-md:mt-10">
                      {weatherData.current.last_updated.split(" ")[1]}
                    </div>
                    <div className="text-xl self-center mt-4">
                      {weatherData.current.last_updated.split(" ")[0]}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-4/6 flex justify-center items-center grow ml-0 mr-0 lg:ml-5 lg:mr-5">
                <div className="bg-zinc-300 dark:bg-[#444444] shadow-lg text-zinc-800 dark:text-white flex grow flex-wrap md:flex-nowrap items-center justify-center gap-5 w-full pl-6 pr-4 pb-8 rounded-[30px] max-md:justify-center max-lg:mt-10 max-md:pl-5">
                  <div className="flex flex-col justify-center gap-5 items-center max-md:mt-10">
                    <div className="text-5xl font-bold bg-clip-text whitespace-nowrap lg:text-6xl">
                      {weatherData.current.temp_c}°C
                    </div>
                    <div className="flex gap-3 mt-11 max-md:mt-10">
                      <div className="flex flex-col items-center">
                        <img
                          src="images/sunrise.png"
                          alt="sunrise"
                          className={`w-12 min-w-fit mt-1 filter ${
                            isDarkMode
                              ? "brightness-0 invert"
                              : "brightness-100"
                          }`}
                        />
                        <img
                          src="images/sunset.png"
                          alt="sunset"
                          className={`w-12 min-w-fit mt-8 filter ${
                            isDarkMode
                              ? "brightness-0 invert"
                              : "brightness-100"
                          }`}
                        />
                      </div>
                      <div className="flex flex-col self-start">
                        <div className="text-xl font-bold whitespace-nowrap">
                          Sunrise
                        </div>
                        <div className="text-base font-semibold whitespace-nowrap mt-1">
                          {weatherData.forecast.forecastday[0].astro.sunrise}
                        </div>
                        <div className="text-xl font-bold mt-6">
                          Sunset
                          <br />
                        </div>
                        <div className="text-base font-semibold whitespace-nowrap mt-1">
                          {weatherData.forecast.forecastday[0].astro.sunset}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center max-md:mt-10">
                    <img
                      src={weatherData.current.condition.icon}
                      alt="sun"
                      className="w-48"
                    />
                    <div className="justify-center text-center text-4xl lg:text-4xl font-bold self-center px-2">
                      {weatherData.current.condition.text}
                    </div>
                  </div>
                  <div className="flex justify-center gap-x-8 mt-10">
                    <div className="md:w-min flex justify-center flex-wrap gap-8 items-center">
                      <div className="flex flex-col items-center self-end">
                        <img
                          src="images/humidity.png"
                          alt="humidity"
                          className={`w-[50px] filter ${
                            isDarkMode
                              ? "brightness-0 invert"
                              : "brightness-100"
                          }`}
                        />
                        <div className="text-center text-xl font-semibold mt-4">
                          {weatherData.current.humidity}%
                        </div>
                        <div className="text-center text-base font-medium mt-7">
                          Humidity
                        </div>
                      </div>
                      <div className="flex flex-col items-center self-end">
                        <img
                          src="images/pressure.png"
                          alt="pressure"
                          className={`w-[50px] filter ${
                            isDarkMode
                              ? "brightness-0 invert"
                              : "brightness-100"
                          }`}
                        />
                        <div className="text-center text-xl font-semibold mt-4">
                          {weatherData.current.pressure_mb}mb
                        </div>
                        <div className="text-center text-base font-medium mt-7">
                          Pressure
                        </div>
                      </div>
                    </div>
                    <div className="md:w-min flex justify-center flex-wrap gap-8 items-center">
                      <div className="flex flex-col items-center self-end">
                        <img
                          src="images/wind.png"
                          alt="wind"
                          className={`w-[50px] filter ${
                            isDarkMode
                              ? "brightness-0 invert"
                              : "brightness-100"
                          }`}
                        />
                        <div className="text-center text-xl font-semibold mt-2">
                          {weatherData.current.wind_kph}km/h
                        </div>
                        <div className="text-center text-base font-medium mt-7">
                          Wind
                        </div>
                      </div>
                      <div className="flex flex-col items-center self-end">
                        <img
                          src="images/uv.png"
                          alt="uv"
                          className={`w-[50px] filter ${
                            isDarkMode
                              ? "brightness-0 invert"
                              : "brightness-100"
                          }`}
                        />
                        <div className="text-center text-xl font-semibold mt-4">
                          {weatherData.current.uv}
                        </div>
                        <div className="text-center text-base font-medium mt-7">
                          UV
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 mb-3.5">
            <div className="gap-5 flex max-lg:flex-col max-lg:gap-0">
              <div className="w-full lg:w-2/5 flex grow ml-0 mr-0 lg:mr-3 lg:ml-5">
                <div className="w-full bg-zinc-300 dark:bg-[#444444] shadow-lg text-zinc-800 dark:text-white flex flex-col justify-center grow mx-auto py-8 pl-8 pr-8 rounded-[30px] max-md:mt-10 max-md:pl-5">
                  <div className="text-center text-3xl font-bold self-center whitespace-nowrap">
                    3 Days Forecast:
                  </div>

                  {daysForecast.map((forecast, index) => (
                    <div
                      key={index}
                      className={`flex justify-around md:max-lg:justify-center gap-5 md:max-lg:gap-10 ${
                        index === 0 && "mt-10"
                      }`}
                    >
                      <div className="flex">
                        <img
                          src={forecast.img_src}
                          alt="clouds"
                          className="w-[60px] max-w-full"
                        />
                        <div className="text-center text-xl font-bold my-auto">
                          {forecast.temperature}°C
                        </div>
                      </div>
                      <div className="text-center text-xl font-bold my-auto">
                        {forecast.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-3/5 flex flex-wrap grow mr-0 lg:mr-5">
                <div className="w-full bg-zinc-300 dark:bg-[#444444] shadow-lg text-zinc-800 dark:text-white flex grow flex-col items-center px-20 py-5 rounded-[30px] max-md:max-w-full max-lg:mt-10 max-md:px-5">
                  <div className="text-3xl font-bold whitespace-nowrap mt-3">
                    Hourly Forecast:
                  </div>

                  <div className="flex justify-center gap-4 mt-6 max-md:max-w-full flex-wrap max-md:justify-center">
                    {hourlyForecast.map((item, index) => (
                      <div
                        key={index}
                        className={`${
                          index <= 3 ? "bg-orange-gradient" : "bg-sky-gradient"
                        } dark:bg-none dark:bg-[#373636] flex flex-col items-center px-6 py-6 rounded-[40px] max-md:px-5`}
                      >
                        <div className="text-xl font-bold whitespace-nowrap">
                          {item.hour}
                        </div>
                        <img src={item.img_src} alt="image" className="w-16" />
                        <div className="text-lg font-bold self-center whitespace-nowrap mt-2">
                          {item.temperature}°C
                        </div>
                        <img
                          src="images/navigation.png"
                          alt="navigation"
                          className="w-[50px] max-w-full mt-3.5"
                        />
                        <div className="text-lg font-bold whitespace-nowrap mt-3.5">
                          {item.wind_speed}km/h
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-[#000000] dark:text-[#FFFFFF] text-xl md:text-2xl text-center font-poppins font-bold mt-12 ml-20 mr-20">
          {!errorMessage &&
            !loading &&
            "Please enter your preferred city in the search bar and press Enter."}
        </div>
      )}
    </>
  );
}
