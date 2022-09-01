import React from "react";

export default function Pagination({
  currentPage,
  goNext,
  goPrev,
  totalItems,
}) {
  const isPrevPageAvailable = currentPage > 0;
  const isNextPageAvailable = (currentPage + 1) * 3 < totalItems;
  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable ? "←" : ""}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
        {isNextPageAvailable ? "→" : ""}
      </button>
    </div>
  );
}
