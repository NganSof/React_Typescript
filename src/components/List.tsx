import React from "react";
import "../css/List.css";
import { IsState as IsProps } from "../App";

function List({ person }: IsProps) {
  const renderList = () => {
    return person?.map((peo, ind) => {
      return (
        <div key={ind} className="list-item-container">
          {peo.name} - {peo.age} - {peo.bio}
        </div>
      );
    });
  };

  return (
    <div className="list-container">
      <h1>List</h1>
      {renderList()}
    </div>
  );
}

export default List;
