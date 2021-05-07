import { useState} from "react";

import "./styles.css";

export default function App() {
  const LIMIT = 10;
  const appData = new Array(200).fill(1).map((_, index) => index + 1);
  const pagenatedData = (page, limit) => {
    const firstIndex = page * limit - limit;
    const lastIndex = page * limit;
    return appData.slice(firstIndex, lastIndex);
  };
  const [currentPage, setCurrentPage] = useState(1);

  const totalData = appData.length;
  const firstPage = 1;
  const lastPage = Math.ceil(totalData / LIMIT);

  const buttonArray = new Array(lastPage).fill(1).map((_, index) => index + 1);

  const handlePrev = () => {
    const newPage = currentPage <= 1 ? 1 : currentPage - 1;
    setCurrentPage(newPage);
  };
  const handleNext = () => {
    const newPage =
      currentPage >= Math.ceil(totalData / LIMIT)
        ? Math.ceil(totalData / LIMIT)
        : currentPage + 1;
    setCurrentPage(newPage);
  };
  const handlePageNavigation = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const renderedData = pagenatedData(currentPage, LIMIT);
  
  
  
  return (
    <div className="App">
      {renderedData.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
      <div className="page-navigation">
        <button
          disabled={currentPage === firstPage}
          onClick={handlePrev}
        >
          Prev
        </button>
        {buttonArray.map((item, index) => (
          <button
            disabled={currentPage === item}
            key={index}
            onClick={() => handlePageNavigation(item)}
          >
            {item}
          </button>
        ))}
        <button disabled={currentPage === lastPage} onClick={handleNext}>
          Next
        </button>
      </div>

    </div>
  );
}
