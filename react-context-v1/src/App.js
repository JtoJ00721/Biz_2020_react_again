import React, { useState } from "react";
import "./App.css";
import StateProvider from "./provider/BookContext";
import Body from "./main/CompBody";

function App() {
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

  // state변수와 delete를 수행할 함수를 묶기
  const stateData = { books, bookDelete };

  return (
    <div className="App">
      <StateProvider.Provider value={stateData}>
        <header className="App-header">
          <Body />
        </header>
      </StateProvider.Provider>
    </div>
  );
}

export default App;
