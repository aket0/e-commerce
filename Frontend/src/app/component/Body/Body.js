import React, {useRef} from 'react';
import Card from '../Card/Card';
import './Body.css'; 
import { useRouter } from 'next/navigation';

function sortAlphabetically(items) {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}

function Body({ selectedOption, addToCart, list }) {
  // Filtrer et trier les produits en fonction de l'option sélectionnée
  const filteredItems = selectedOption
    ? sortAlphabetically(
        list.filter((item) => item.type === selectedOption || item.weater === selectedOption)
      )
    : sortAlphabetically(list);

  // Organiser les produits dans des groupes par option
  const groupedItems = list.reduce((groups, item) => {
    const { type, weater } = item;
    groups['all'] = groups['all'] || [];
    groups['all'].push(item);
    groups[type] = groups[type] || [];
    groups[type].push(item);
    groups[weater] = groups[weater] || [];
    groups[weater].push(item);
    return groups;
  }, {});
  const containerRef = useRef(null);

  const handleWheel = (event) => {
    const container = containerRef.current;
    const deltaX = event.deltaX;
    const deltaY = event.deltaY;
    
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      event.preventDefault(); 
      container.scrollLeft += deltaX;
    }
  };

  

  return (
    <div id="body">
    <div id='row'>
      {Object.keys(groupedItems).map((option, index) => (
        <div key={index} className="option-container">
          <h2 id={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</h2>
          <div id="prod"  onWheel={handleWheel} ref={containerRef}>
            {groupedItems[option].map((item, idx) => (
              <Card key={idx} item={item} addToCart={addToCart} />
            ))}
          </div>
        </div>
      ))}
      
      </div>
    </div>
  );
}

export default Body;
