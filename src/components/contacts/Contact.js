import React, { useState } from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { deleteContact } from "../../actions/contactAction";
import { useDispatch } from "react-redux";

const Contact = ({ contact, selectAll }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const { name, phone, email, id } = contact;

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={selectAll || checked}
          onClick={() => {
            if (!selectAll) setChecked(!checked);
          }}
        />
      </td>
      <td>
        <Avatar className="mr-2" name={name} size="45" round={true} /> {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="actionsqq">
        {checked && (
          <>
            <Link to={`/contacts/edit/${id}`}>
              <span className="material-icons mr-2">edit</span>
            </Link>
            <span
              className="material-icons  text-danger"
              onClick={() => dispatch(deleteContact(id))}
              style={{ cursor: "pointer" }}
            >
              remove_circle
            </span>
          </>
        )}
      </td>
    </tr>
  );
};

export default Contact;
