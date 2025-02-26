import React from "react";

function Pagination({
  todosPerPage,
  totalTodos,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  // Генерация номеров страниц
  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={number === currentPage ? "active" : ""}
        >
          {number}
        </button>
      ))}
    </nav>
  );
}

export default Pagination;