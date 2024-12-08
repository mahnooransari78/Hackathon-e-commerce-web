
import React from "react"; 
import { IoIosSearch } from "react-icons/io";

const Search = () => {
    return( 
        <div className="relative w-[317px] h-[40px] border-t-2 border-[#E7E6EF] flex items-center justify-between">
    {/* <Search Input - */}
    <input
        type="search"
        className="w-full h-full px-4 border-2 rounded border-[#E7E6EF] focus:outline-none"
    />
    
    {/* <!-- Search Icon Button --> */}
    <button className="w-[51px] h-[40px] bg-[#FB2E86] flex items-center justify-center">
        <IoIosSearch className="w-[20px] h-[20px] text-white" />
    </button>
</div>

    );
}

export default Search;