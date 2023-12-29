export default function Forecast({ isDarkMode }) {
  const daysForecast = [
    {
      temperature: 20,
      img_src: "images/clouds.png",
      date: "Friday, 1 Sep",
    },
    {
      temperature: 22,
      img_src: "images/mist.png",
      date: "Friday, 2 Sep",
    },
    {
      temperature: 27,
      img_src: "images/sun.png",
      date: "Friday, 3 Sep",
    },
  ];
  const hourlyForecast = [
    {
      hour: "12:00",
      img_src: "images/sun.png",
      temperature: 26,
      wind_speed: 3,
    },
    {
      hour: "15:00",
      img_src: "images/sun.png",
      temperature: 27,
      wind_speed: 2,
    },
    {
      hour: "18:00",
      img_src: "images/clouds.png",
      temperature: 27,
      wind_speed: 2,
    },
    {
      hour: "21:00",
      img_src: "images/clouds.png",
      temperature: 25,
      wind_speed: 3,
    },
    {
      hour: "00:00",
      img_src: "images/sun.png",
      temperature: 22,
      wind_speed: 3,
    },
  ];

  return (
    <div className="w-full max-w-7xl mb-16 px-4 sm:px-14 lg:px-0">
      <div className="mt-11">
        <div className="gap-5 flex max-lg:flex-col max-lg:gap-0">
          <div className="w-full lg:w-2/6 flex grow ml-0 lg:ml-10">
            <div className="bg-zinc-300 dark:bg-[#444444] text-zinc-800 dark:text-white flex grow flex-col justify-center items-center w-full px-16 py-12 rounded-[30px] max-md:max-w-full max-md:mt-10 max-md:px-5">
              <div className="flex flex-col items-center mt-4">
                <div className="text-4xl font-bold self-center">Athens</div>
                <div className="text-7xl font-bold mt-14 max-md:text-4xl max-md:mt-10">
                  09:03
                </div>
                <div className="text-xl self-center mt-4">Thursday, 31 Aug</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-4/6 flex justify-center items-center grow ml-0 mr-0 lg:ml-5 lg:mr-10">
            <div className="bg-zinc-300 dark:bg-[#444444] text-zinc-800 dark:text-white flex grow flex-wrap md:flex-nowrap items-center justify-center gap-5 w-full pl-6 pr-4 pb-8 rounded-[30px] max-md:justify-center max-lg:mt-10 max-md:pl-5">
              <div className="flex flex-col justify-center gap-5 items-center self-end max-md:mt-10">
                <div className="text-5xl font-bold bg-clip-text whitespace-nowrap lg:text-7xl">
                  24°C
                </div>
                <div className="flex gap-3 mt-11 max-md:mt-10">
                  <div className="flex flex-col items-center">
                    <img
                      src={
                        isDarkMode
                          ? "images/sunrise-white.png"
                          : "images/sunrise.png"
                      }
                      alt="sunrise"
                      className="w-12 min-w-fit mt-1"
                    />
                    <img
                      src={
                        isDarkMode
                          ? "images/sunset-white.png"
                          : "images/sunset.png"
                      }
                      alt="sunset"
                      className="w-12 min-w-fit mt-8"
                    />
                  </div>
                  <div className="flex flex-col self-start">
                    <div className="text-xl font-bold whitespace-nowrap">
                      Sunrise
                    </div>
                    <div className="text-base font-semibold whitespace-nowrap mt-1">
                      06:37 AM
                    </div>
                    <div className="text-xl font-bold mt-6">
                      Sunset
                      <br />
                    </div>
                    <div className="text-base font-semibold whitespace-nowrap mt-1">
                      20:37 AM
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2 self-start">
                <img src="images/sun.png" alt="sun" className="w-full min-w-fit" />
                <div className="justify-center text-center text-4xl lg:text-5xl font-bold self-center whitespace-nowrap">
                  Sunny
                </div>
              </div>
              <div className="flex justify-center gap-x-8 mt-10">
                <div className="md:w-min flex justify-center flex-wrap gap-8 items-center">
                  <div className="flex flex-col items-center self-end">
                    <img
                      src={
                        isDarkMode
                          ? "images/humidity-white.png"
                          : "images/humidity.png"
                      }
                      alt="humidity"
                      className="w-[60px]"
                    />
                    <div className="text-center text-xl font-semibold mt-4">
                      41%
                    </div>
                    <div className="text-center text-base font-medium mt-7">
                      Humidity
                    </div>
                  </div>
                  <div className="flex flex-col items-center self-end">
                    <img
                      src={
                        isDarkMode
                          ? "images/pressure-white.png"
                          : "images/pressure.png"
                      }
                      alt="pressure"
                      className="w-[60px]"
                    />
                    <div className="text-center text-xl font-semibold mt-4">
                      997hPa
                    </div>
                    <div className="text-center text-base font-medium mt-7">
                      Pressure
                    </div>
                  </div>
                </div>
                <div className="md:w-min flex justify-center flex-wrap gap-8 items-center">
                  <div className="flex flex-col items-center self-end">
                    <img
                      src={
                        isDarkMode ? "images/wind-white.png" : "images/wind.png"
                      }
                      alt="wind"
                      className="w-[60px]"
                    />
                    <div className="text-center text-xl font-semibold mt-2">
                      2km/h
                    </div>
                    <div className="text-center text-base font-medium mt-7">
                      Wind
                    </div>
                  </div>
                  <div className="flex flex-col items-center self-end">
                    <img
                      src={isDarkMode ? "images/uv-white.png" : "images/uv.png"}
                      alt="uv"
                      className="w-[60px]"
                    />
                    <div className="text-center text-xl font-semibold mt-4">
                      8
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
          <div className="w-full lg:w-2/5 flex grow ml-0 mr-0 lg:mr-3 lg:ml-10">
            <div className="w-full bg-zinc-300 dark:bg-[#444444] text-zinc-800 dark:text-white flex flex-col justify-center grow mx-auto py-8 pl-8 pr-8 rounded-[30px] max-md:mt-10 max-md:pl-5">
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

          <div className="w-full lg:w-3/5 flex flex-wrap grow mr-0 lg:mr-10">
            <div className="w-full shadow-sm bg-zinc-300 dark:bg-[#444444] text-zinc-800 dark:text-white flex grow flex-col items-center px-20 py-5 rounded-[30px] max-md:max-w-full max-lg:mt-10 max-md:px-5">
              <div className="text-3xl font-bold whitespace-nowrap mt-1">
                Hourly Forecast:
              </div>

              <div className="flex justify-between gap-4 mt-6 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                {hourlyForecast.map((item, index) => (
                  <div
                    key={index}
                    className={`${
                      index <= 2 ? "bg-orange-gradient" : "bg-sky-gradient"
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
  );
}
