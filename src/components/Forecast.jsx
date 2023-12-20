export default function Forecast() {
  return (
    <div className="w-full max-w-7xl mb-16">
      <div className="mt-11 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:gap-0">
          <div className="w-2/5 flex flex-col ml-16 max-md:w-full max-md:ml-0">
            <div className="bg-zinc-300 flex grow flex-col justify-center items-center w-full px-16 py-12 rounded-[30px] max-md:max-w-full max-md:mt-10 max-md:px-5">
              <div className="flex flex-col mt-4">
                <div className="text-zinc-800 text-4xl font-bold self-center whitespace-nowrap">
                  Athens
                </div>
                <div className="text-zinc-800 text-8xl font-bold mt-20 max-md:text-4xl max-md:mt-10">
                  09:03
                </div>
                <div className="text-zinc-800 text-xl self-center whitespace-nowrap mt-4">
                  Thursday, 31 Aug
                </div>
              </div>
            </div>
          </div>

          <div className="w-3/5 flex flex-col ml-5 mr-16 max-md:w-full max-md:ml-0">
            <div className="bg-zinc-300 flex grow items-start justify-between gap-5 w-full pl-6 pr-4 pb-8 rounded-[30px] max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10 max-md:pl-5">
              <div className="flex grow flex-col items-center mt-11 self-end max-md:mt-10">
                <div className="text-7xl font-bold bg-clip-text whitespace-nowrap max-md:text-4xl">
                  24°C
                </div>
                <div className="flex gap-3 mt-11 max-md:mt-10">
                  <div className="flex flex-col items-center">
                    <img
                      src="/images/sunrise.png"
                      alt="sunrise"
                      className="w-12"
                    />
                    <img
                      src="/images/sunset.png"
                      alt="sunset"
                      className="w-12 mt-5"
                    />
                  </div>
                  <div className="flex flex-col self-start">
                    <div className="text-zinc-800 text-xl font-bold whitespace-nowrap">
                      Sunrise
                    </div>
                    <div className="text-zinc-800 text-base font-semibold whitespace-nowrap mt-4">
                      06:37 AM
                    </div>
                    <div className="text-zinc-800 text-xl font-bold mt-6">
                      Sunset
                      <br />
                    </div>
                    <div className="text-zinc-800 text-base font-semibold whitespace-nowrap mt-4">
                      20:37 AM
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col -mt-2 self-start">
                <img
                  src="images/sun.png"
                  alt="sun"
                  className="w-full"
                />
                <div className="justify-center text-zinc-800 text-center text-3xl font-bold self-center whitespace-nowrap">
                  Sunny
                </div>
              </div>
              <div className="flex flex-col items-center mt-7 self-end">
                <img
                  src="images/humidity.png"
                  alt="humidity"
                  className="w-[74px]"
                />
                <div className="text-zinc-800 text-center text-xl font-semibold mt-4">
                  41%
                </div>
                <div className="text-zinc-800 text-center text-base font-medium mt-6">
                  Humidity
                </div>
                <img
                  src="images/pressure.png"
                  alt="pressure"
                  className="w-[74px] mt-6"
                />
                <div className="text-zinc-800 text-center text-xl font-semibold mt-4">
                  997hPa
                </div>
                <div className="text-zinc-800 text-center text-base font-medium mt-7">
                  Pressure
                </div>
              </div>
              <div className="flex flex-col mt-5 self-end">
                <img
                  src="images/wind.png"
                  alt="wind"
                  className="w-[60px] max-w-full"
                />
                <div className="text-zinc-800 text-center text-xl font-semibold self-center mt-2.5">
                  2km/h
                </div>
                <div className="text-zinc-800 text-center text-base font-medium whitespace-nowrap mt-5">
                  Wind Speed
                </div>
                <img
                  src="images/uv.png"
                  alt="uv"
                  className="w-[58px] max-w-full mt-6"
                />
                <div className="text-zinc-800 text-center text-xl font-semibold self-center mt-4">
                  8
                </div>
                <div className="text-zinc-800 text-center text-base font-medium self-center mt-7">
                  UV
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 mb-3.5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:gap-0">
          <div className="w-2/5 flex flex-col mr-3 ml-16 max-md:w-full max-md:ml-0">
            <div className="bg-zinc-300 flex w-full grow flex-col mx-auto pl-8 pr-8 pt-8 rounded-[30px] max-md:mt-10 max-md:pl-5">
              <div className="justify-center text-zinc-800 text-center text-3xl font-bold self-center whitespace-nowrap">
                5 Days Forecast:
              </div>
              <div className="flex justify-between gap-5 mt-1.5 max-md:justify-center">
                <img
                  src="images/clouds.png"
                  alt="clouds"
                  className="w-[60px] max-w-full"
                />
                <div className="justify-center text-zinc-800 text-center text-2xl font-bold self-center my-auto">
                  20°C
                </div>
                <div className="justify-center text-zinc-800 text-center text-xl font-bold my-auto">
                  Friday, 1 Sep
                </div>
              </div>

              <div className="flex justify-between gap-5 max-md:justify-center">
                <img
                  src="images/mist.png"
                  alt="mist"
                  className="w-[60px] max-w-full"
                />
                <div className="justify-center text-zinc-800 text-center text-2xl font-bold self-center my-auto">
                  22°C
                </div>
                <div className="justify-center text-zinc-800 text-center text-xl font-bold my-auto">
                  Saturday, 2 Sep
                </div>
              </div>

              <div className="flex justify-between gap-5 max-md:justify-center">
                <img
                  src="images/sun.png"
                  alt="sun"
                  className="w-[60px] max-w-full"
                />
                <div className="justify-center text-zinc-800 text-center text-2xl font-bold self-center my-auto">
                  27°C
                </div>
                <div className="justify-center text-zinc-800 text-center text-xl font-bold my-auto">
                  Sunday, 3 Sep
                </div>
              </div>

              <div className="flex justify-between gap-5 max-md:justify-center">
                <img
                  src="images/drizzle.png"
                  alt="drizzle"
                  className="w-[60px] max-w-full"
                />
                <div className="justify-center text-zinc-800 text-center text-2xl font-bold self-center my-auto">
                  18°C
                </div>
                <div className="justify-center text-zinc-800 text-center text-xl font-bold my-auto">
                  Monday, 4 Sep
                </div>
              </div>
              
              <div className="flex justify-between gap-5 max-md:justify-center">
                <img
                  src="images/rain.png"
                  alt="rain"
                  className="w-[60px] max-w-full"
                />
                <div className="justify-center text-zinc-800 text-center text-2xl font-bold self-center my-auto">
                  16°C
                </div>
                <div className="justify-center text-zinc-800 text-xl font-bold my-auto">
                  Tuesday, 5 Sep
                </div>
              </div>
            </div>
          </div>

          <div className="w-3/5 flex flex-col mr-16 max-md:w-full max-md:ml-0">
            <div className="w-full shadow-sm bg-zinc-300 flex grow flex-col items-center px-20 py-5 rounded-[30px] max-md:max-w-full max-md:mt-10 max-md:px-5">
              <div className="text-zinc-800 text-3xl font-bold whitespace-nowrap">
                Hourly Forecast:
              </div>

              <div className="flex justify-between gap-4 mt-6 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div
                  style={{
                    background:
                      "linear-gradient(171deg, #F88508 -12.41%, rgba(246, 250, 217, 0.00) 163.32%)",
                  }}
                  className="flex flex-col px-6 py-6 rounded-[40px] max-md:px-5"
                >
                  <div className="text-zinc-800 text-2xl font-bold whitespace-nowrap">
                    12:00
                  </div>
                  <img
                    src="images/sun.png"
                    alt="sun"
                    className="w-20"
                  />
                  <div className="text-zinc-800 text-xl font-bold self-center whitespace-nowrap mt-2">
                    26°C
                  </div>
                  <img
                    src="images/navigation.png"
                    alt="navigation"
                    className="w-[55px] max-w-full mt-3.5"
                  />
                  <div className="text-zinc-800 text-xl font-bold whitespace-nowrap mt-3.5">
                    3km/h
                  </div>
                </div>

                <div
                  style={{
                    background:
                      "linear-gradient(171deg, #F88508 -12.41%, rgba(246, 250, 217, 0.00) 163.32%)",
                  }}
                  className="flex flex-col px-6 py-6 rounded-[40px] max-md:px-5"
                >
                  <div className="text-zinc-800 text-2xl font-bold whitespace-nowrap">
                    15:00
                  </div>
                  <img
                    src="images/sun.png"
                    alt="sun"
                    className="w-20"
                  />
                  <div className="text-zinc-800 text-xl font-bold self-center whitespace-nowrap mt-2">
                    27°C
                  </div>
                  <img
                    src="images/navigation.png"
                    alt="navigation"
                    className="w-[55px] max-w-full mt-3"
                  />
                  <div className="text-zinc-800 text-xl font-bold whitespace-nowrap mt-3.5">
                    2km/h
                  </div>
                </div>

                <div
                  style={{
                    background:
                      "linear-gradient(171deg, #F88508 -12.41%, rgba(246, 250, 217, 0.00) 163.32%)",
                  }}
                  className="flex flex-col px-6 py-6 rounded-[40px] max-md:px-5"
                >
                  <div className="text-zinc-800 text-2xl font-bold whitespace-nowrap">
                    18:00
                  </div>
                  <img
                    src="images/clouds.png"
                    alt="clouds"
                    className="w-20"
                  />
                  <div className="text-zinc-800 text-xl font-bold self-center whitespace-nowrap mt-2">
                    27°C
                  </div>
                  <img
                    src="images/navigation.png"
                    alt="navigation"
                    className="w-[55px] max-w-full mt-3"
                  />
                  <div className="text-zinc-800 text-xl font-bold whitespace-nowrap mt-3.5">
                    2km/h
                  </div>
                </div>

                <div
                  style={{
                    background:
                      "linear-gradient(168deg, #443D64 -19.21%, rgba(101, 130, 198, 0.00) 158.48%)",
                  }}
                  className="flex flex-col px-6 py-6 rounded-[40px] max-md:px-5"
                >
                  <div className="text-zinc-800 text-2xl font-bold whitespace-nowrap">
                    21:00
                  </div>
                  <img
                    src="images/clouds.png"
                    alt="clouds"
                    className="w-20"
                  />
                  <div className="text-zinc-800 text-xl font-bold self-center whitespace-nowrap mt-2">
                    25°C
                  </div>
                  <img
                    src="images/navigation.png"
                    alt="navigation"
                    className="w-[55px] max-w-full mt-3"
                  />
                  <div className="text-zinc-800 text-xl font-bold whitespace-nowrap mt-3.5">
                    3km/h
                  </div>
                </div>

                <div
                  style={{
                    background:
                      "linear-gradient(168deg, #443D64 -19.21%, rgba(101, 130, 198, 0.00) 158.48%)",
                  }}
                  className="flex flex-col px-6 py-6 rounded-[40px] max-md:px-5"
                >
                  <div className="text-zinc-800 text-2xl font-bold whitespace-nowrap">
                    00:00
                  </div>
                  <img
                    src="images/sun.png"
                    alt="sun"
                    className="w-20"
                  />
                  <div className="text-zinc-800 text-xl font-bold self-center whitespace-nowrap mt-2">
                    22°C
                  </div>
                  <img
                    src="images/navigation.png"
                    alt="navigation"
                    className="w-[55px] max-w-full mt-3"
                  />
                  <div className="text-zinc-800 text-xl font-bold whitespace-nowrap mt-3.5">
                    3km/h
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
