import React, { useContext } from "react";
import StateProvider from "../provider/BookContext";

function CompItem({ book }) {
  const { bookDelete } = useContext(StateProvider);
  const onClick = (e) => {
    bookDelete(e.target.dataset.id);
  };
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.comp}</td>
      <td>{book.price}</td>
      <td onClick={onClick} data-id={book.id}>
        &times;
      </td>
    </tr>
  );
}

export default CompItem;
