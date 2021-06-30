import React from "react";

export const List = ({ list, onChangeBox, handleDel }) => (
  <ul>
    {list.map(item => (
      <li
        key={item.id}
        style={{ textDecoration: item.done ? "line-through" : null }}
      >
        <Checkbox
          onClick={() => onChangeBox(item)}
          defaultChecked={item.done}
        />{" "}
        {item.name}
        <Button onClick={() => handleDel(item)}>Delete</Button>
      </li>
    ))}
  </ul>
);


export const Input = ({ value, onChange }) => (
  <input class="input" type="text" value={value} onChange={onChange} />
);


export const Checkbox = ({ onClick, defaultChecked }) => (
  <input type="checkbox" onClick={onClick} defaultChecked={defaultChecked} />
);

export const Button = ({ onClick, children }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);
