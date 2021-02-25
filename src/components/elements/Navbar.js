import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Navbar = () => {
  // const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const searchContact = (e) => {
    if (e.target.value) {
      dispatch({ type: "SEARCHING_TRUE" });
      dispatch({ type: "SEARCH_CONTACT", payload: e.target.value });
    } else dispatch({ type: "SEARCHING_FALSE" });
  };
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Contact Book
        </Link>
        {/* <TextField id="standard-basic" label="Standard" /> */}
        <input
          type="text"
          placeholder="search..."
          onChange={searchContact}
          style={{ outline: "none", padding: "3px" }}
        />
        <div>
          <Link to="/contacts/add" className="btn btn-light ml-auto">
            Create Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
