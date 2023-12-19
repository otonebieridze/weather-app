import { IoSearch } from "react-icons/io5";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="mt-16 ml-16">
        <div className="w-24 h-9 bg-[#D9D9D9] border border-solid border-[#000000] rounded-3xl flex items-center">
          <div className="w-7 h-7 bg-black rounded-full ml-1" />
        </div>
        <p className="text-[#000000] text-lg font-poppins font-extrabold mt-1">
          Light Mode
        </p>
      </div>

      <div className="w-[800px] h-16 bg-[#D9D9D9] mt-16 mr-16 border border-solid border-[#000000] rounded-[40px] shadow-2xl flex items-center">
        <IoSearch className="text-5xl text-gray-400 ml-6" />
        <input
          placeholder="Search for your preffered city..."
          className="w-full h-full bg-transparent ml-3 outline-none text-[#292929] text-lg font-poppins placeholder-gray-500 focus:placeholder-gray-400 pr-8"
        />
      </div>
    </div>
  );
}
