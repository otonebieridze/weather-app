import { IoSearch } from "react-icons/io5";

export default function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <div className="w-full max-w-7xl flex justify-between items-center max-md:max-w-full max-md:flex-col max-md:justify-center px-4 sm:px-14 md:px-0">
      <div className="mt-8 md:mt-16 md:ml-16 lg:ml-10 flex flex-col justify-center items-center">
        <div
          className="w-20 md:w-24 h-9 bg-[#D9D9D9] border border-solid border-[#000000] rounded-3xl flex items-center cursor-pointer relative"
          onClick={() => setIsDarkMode((prev) => !prev)}
        >
          <div className="w-6 md:w-7 h-6 md:h-7 bg-black rounded-full absolute left-1 dark:left-[calc(100%-32px)]" />
        </div>
        <p className="text-[#000000] dark:text-[#FFFFFF] text-lg font-poppins font-extrabold mt-1">
          {isDarkMode ? "Dark " : "Light "} Mode
        </p>
      </div>

      <div className="w-full md:w-[450px] bg-[#D9D9D9] dark:bg-[#444444] mt-8 md:mt-16 md:mr-16 lg:mr-10 gap-4 pl-6 pr-9 py-2 border border-solid border-[#000000] dark:border-none rounded-[40px] shadow-2xl flex items-center">
        <IoSearch className="text-5xl text-gray-400" />
        <input
          placeholder="Search for your preffered city..."
          className="w-full h-full bg-transparent outline-none text-[#292929] dark:text-[#FFFFFF99] text-lg font-poppins placeholder-gray-500 focus:placeholder-gray-400"
        />
      </div>
    </div>
  );
}
