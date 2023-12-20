import { IoSearch } from "react-icons/io5";

export default function Header() {
  return (
    <div className="w-full max-w-7xl flex justify-between items-center max-md:max-w-full max-md:flex-col max-md:justify-center">
      <div className="mt-8 md:mt-16 md:ml-16">
        <div className="w-24 h-9 bg-[#D9D9D9] border border-solid border-[#000000] rounded-3xl flex items-center">
          <div className="w-7 h-7 bg-black rounded-full ml-1" />
        </div>
        <p className="text-[#000000] text-lg font-poppins font-extrabold mt-1">
          Light Mode
        </p>
      </div>

      <div className="w-[450px] bg-[#D9D9D9] mt-8 md:mt-16 md:mr-16 gap-4 pl-6 pr-9 py-2 border border-solid border-[#000000] rounded-[40px] shadow-2xl flex items-center">
        <IoSearch className="text-5xl text-gray-400" />
        <input
          placeholder="Search for your preffered city..."
          className="w-full h-full bg-transparent outline-none text-[#292929] text-lg font-poppins placeholder-gray-500 focus:placeholder-gray-400"
        />
      </div>
    </div>
  );
}
