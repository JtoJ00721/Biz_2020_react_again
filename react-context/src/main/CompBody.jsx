import React, { useState } from "react";
import CompList from "./CompList";

function CompBody() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "조선 민족 전래동화 농농이",
      comp: "쩔이출판사",
      price: 2000000000,
    },
    {
      id: 2,
      title: "여러삶 시리즈",
      comp: "쩔이출판사",
      price: 2000000000,
    },
    {
      id: 3,
      title: "하스피탈스톤",
      comp: "쩔이출판사",
      price: 2000000000,
    },
    {
      id: 4,
      title: "어느 때부터",
      comp: "쩔이출판사",
      price: 2000000000,
    },
    {
      id: 5,
      title: "아티팩트",
      comp: "쩔이출판사",
      price: 2000000000,
    },
  ]);

  const bookDelete = (id) => {
    const deleteBooks = books.filter((book) => {
      return book.id != id;
    });
    setBooks([...deleteBooks]);
  };

  return (
    <div>
      <h3>
        <CompList books={books} bookDelete={bookDelete} />
      </h3>
    </div>
  );
}

export default CompBody;
