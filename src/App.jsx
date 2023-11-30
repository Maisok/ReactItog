import React, { useState } from 'react';
function App (){
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const toggleItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index] = updatedItems[index].startsWith('✔') ? updatedItems[index].substring(1): '✔' + updatedItems[index];
    setItems(updatedItems);
  };

  const editItem = (index, newValue) => {
    const updatedItems = [...items];
    updatedItems[index] = newValue;
    setItems(updatedItems);
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={addItem}>Добавить</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input type="checkbox" onChange={() => toggleItem(index)} />
            <input type="text" value={item} onChange={(e) => editItem(index, e.target.value)}
            />
            <button onClick={(e) => deleteItem(index)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;



