import React from "react";
import "./style.css";

const Searchbar = () => {
  //   const [state, setState] = useState({
  //     input: "",
  //     results: [],
  //     selected: {},
  //   });
  //   const handleInput = (e) => {
  //     let input = e.target.value;
  //     setState((prevState) => {
  //       return { ...prevState, input: input };
  //     });
  //   };

  //   useEffect(() => {});

  return (
    <section className="search-bar">
      <input
        className="search-box"
        type="text"
        placeholder="Search for a movie"
      />
      <button className="search-button">Search</button>
    </section>
  );
};

export default Searchbar;
