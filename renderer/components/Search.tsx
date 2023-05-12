import React, { useState } from 'react';

const Phonebook: React.FC = () => {
  const [filter, setFilter] = useState('');
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value.toUpperCase());
  };
  
  const filteredNames = [].filter(name =>
    name.toUpperCase().includes(filter)
  );

  return (
    <div>
      
      
      <input
        type="text"
        id="myInput"
        value={filter}
        onChange={handleInputChange}
        placeholder="Zoeken naar emails"
        title="Type in a name"
        className="w-full p-4 border-2 border-gray-300 mb-4 text-black"
      />

      <ul id="myUL">
        {filteredNames.map((name, index) => (
          <li key={index}>
            <a href="#">{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Phonebook;