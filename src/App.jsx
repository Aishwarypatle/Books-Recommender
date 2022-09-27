import './App.css'
import React from 'react';
import { useState } from 'react';



let booksList =
{
    Sci_Fi:
  [
    { name:"Beyond the burn line", author:"Paul McAuley"},
    { name:"Expect me tommmorow", author:"Christopher priest"},
    { name:"Isolation", author:"Dan Coxon"},
    { name:"The Pillars of the Earth", author:"Ken Follett"}
  ],

  Horror :
    [
      { name: "Black Mouth", author: "Ronald Malfi" },
      { name: "The Stage Mother's Club", author: "Ran Copshaw" },
      { name: "All that's lost", author: "Ray cluley" },
      { name: "Ricky's Hand", author: "David Quantick" }
    ],
  Adventure:
  [
    { name: "Jurassic Park ", author: "Micheal Crichton" },
    { name: "The Hobbit", author: "J.R.R. Tolkien" },
    { name: "The Hunger Games", author: "Suzane collins" },
    { name: "The bourne identity", author: " Robert Ludlum" }
  ],
  Philosophy :
  [
    { name: "A History of Western Philosophy ", author: " Bertrand Russell" },
    { name: "The Philosophy of Andy Warhol", author: " Andy Warhol" },
    { name: "The Consolations of Philosophy", author: " Alain de Botton" },
    { name: "Meditations on First Philosophy", author: "René Descartes" }
  ]
};


export default function App() {
  const [selectedGenre, setGenre] = useState("Sci_Fi");
  function clickHandlerGenre(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ fontSize: "3rem" }}> Amazing Books to read</h1>
     

      <div>
        {Object.keys(booksList).map((genre) => (
          <button
            onClick={() => clickHandlerGenre(genre)}
            style={{
              background: "#00aaa0",
              borderRadius: "1rem",
              padding: "0.8rem  2rem",
              border: "1px solid #BFA2DB",
              margin: "1rem 0.3rem",
               
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {booksList[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem ",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.author} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

