import React, { useContext, useState } from "react";
import { PokedexContext } from "../../Context/PokedexContext";

const SearchBar = () => {
  // const { searchValue } = useContext(PokedexContext);

  // const [keyword, setKeyword] = useState("");
  // const [searchTerm, setSearchTerm] = useState("");

  // // Array yang diberikan
  // const data = [
  //   { id: 1, name: "John", umur: 25, domisili: "Jakarta" },
  //   { id: 2, name: "Alice", umur: 30, domisili: "Bandung" },
  //   { id: 3, name: "Bob", umur: 28, domisili: "Surabaya" },
  //   // ...
  // ];

  // // Fungsi untuk melakukan filter berdasarkan kata kunci
  // const filterData = (inputKeyword) => {
  //   return data.filter((item) =>
  //     item.name.toLowerCase().includes(inputKeyword.toLowerCase())
  //   );
  // };

  // const handleInputChange = (event) => {
  //   setKeyword(event.target.value);
  // };

  // const handleEnterPress = (event) => {
  //   if (event.key === "Enter") {
  //     setSearchTerm(keyword);
  //   }
  // };

  // // Filter data berdasarkan searchTerm (hanya ketika Enter ditekan)
  // const filteredResult = filterData(searchTerm);

  return (
    <form className="relative flex items-center w-4/5 mx-auto md:my-9 my-3">
      <span className="material-icons-outlined absolute left-3.5">search</span>
      <input
        type="search"
        autoComplete="off"
        // value={searchValue}
        // onChange={handleInputChange}
        placeholder="Search Pokemon"
        className="pl-11 w-full pr-4 py-3 rounded-full outline-none bg-gray-300"
      />
    </form>
    // <div>
    //   <input
    //     type="text"
    //     placeholder="Cari..."
    //     value={keyword}
    //     onChange={handleInputChange}
    //     onKeyPress={handleEnterPress}
    //   />

    //   {/* Menampilkan hasil filter */}
    //   <ul>
    //     {filteredResult.map((item) => (
    //       <li key={item.id}>{item.name}</li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default SearchBar;
