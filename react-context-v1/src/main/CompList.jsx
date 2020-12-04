import React, { useContext } from "react";
import CompItem from "./CompItem";
import StateProvider from "../provider/BookContext";

function CompList(props) {
  const { books } = useContext(StateProvider);

  const booTdList = books.map((book) => {
    return <CompItem book={book} />;
  });

  return (
    <table>
      <tr>
        <th>No</th>
        <th>도서명</th>
        <th>출판사</th>
        <th>가격</th>
        <th>비고</th>
      </tr>
      {booTdList}
    </table>
  );
}

export default CompList;
