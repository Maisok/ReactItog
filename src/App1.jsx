import React, { useState } from 'react';
function App() {
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

  // const toggleItem = (index) => {
  //   const updatedItems = [...items];
  //   updatedItems[index] = updatedItems[index].startsWith('✔') ? updatedItems[index].substring(1): '✔' + updatedItems[index];
  //   setItems(updatedItems);
  // };

  const editItem = (index, newValue) => {
    setInputValue(items[index]);
    deleteItem(items[index])
    // const updatedItems = [...items];
    // updatedItems[index] = newValue;
    // setItems(updatedItems);
  };
  return (
    <div>
      <textarea type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></textarea>
      <button onClick={addItem}>Добавить</button>

      <ul>
        {items.map((item, index) => (
          <div>
            <li key={index} onClick={(e) => editItem(index)}>{item}</li><button onClick={(e) => deleteItem(index)}>Удалить</button>
          </div>
          
        )
        )
        }
      </ul>
    </div>
  );
};
export default App;



