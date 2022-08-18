import { useState } from "react";

const SortableList = () => {
  const [sports, setSports] = useState([
    "Football",
    "Basketball",
    "Baseball",
    "Soccer",
    "Hockey",
    "Running",
    "Chess",
    "Karate",
    "Kungfu",
  ]);
  const [dragItemIndex, setDragItemIndex] = useState();
  const [dragOverItemIndex, setDragOverItemIndex] = useState();

  const handleDragStart = index => {
    setDragItemIndex(index)
  };

  const handleDragOver = event => {
    event.preventDefault();
  }

  const handleDrop = () => {
    const _sports = [...sports];
    const dragItem = _sports.splice(dragItemIndex, 1);
    _sports.splice(dragOverItemIndex, 0, dragItem);
    setSports(_sports);
  }

  const handleDragEnter = index => {
    setDragOverItemIndex(index)
  }

  const handleDragLeave = (event) => {
    setDragOverItemIndex(undefined)
  }

  const handleDragEnd = event => {
    setDragItemIndex(undefined);
    setDragOverItemIndex(undefined);
  }

  return (
    <div>
      <h1>Favorite Sports</h1>
      <div className="list">
        {sports.map((sport, index) => (
          <li
            key={index}
            className={dragOverItemIndex === index ? "list-item next-position" : "list-item"}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragLeave={handleDragLeave}
            onDragEnd={handleDragEnd}
            
          >
            <span>{index}</span>
            <h3>{sport}</h3>
          </li>
        ))}
      </div>
    </div>
  );
};

export default SortableList;
