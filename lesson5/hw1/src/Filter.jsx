import React from 'react';

export default function Filter({ onChange, count, filtertext }) {
  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input
        type="text"
        className="filter__input"
        value={filtertext}
        onChange={event => onChange(event.target.value)}
      />
    </div>
  );
}
