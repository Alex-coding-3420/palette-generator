import { useState, useEffect } from 'react';
import Palette from './Palette';

function PaletteContainer() {
  const generateRandomHex = () => {
    let hex = '';
    for (let i = 0; i < 6; i++) {
      hex += Math.floor(Math.random() * 16).toString(16);
    }
    return `#${hex}`;
  };

  const generateRandomColors = () => {
    return Array.from({ length: 5 }, generateRandomHex);
  };

  const [colors, setColors] = useState(generateRandomColors());
  const [isLocked, setIsLocked] = useState(Array(5).fill(false));

  const refreshColors = () => {
    setColors(
      colors.map((color, index) =>
        isLocked[index] ? color : generateRandomHex()
      )
    );
  };

  const toggleLock = (index) => {
    const newIsLocked = [...isLocked];
    newIsLocked[index] = !newIsLocked[index];
    setIsLocked(newIsLocked);
  };

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        event.preventDefault();
        refreshColors();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [colors, isLocked]);

  return (
    <div className='palette-container'>
      {colors.map((color, index) => (
        <Palette
          key={index}
          color={color}
          isLocked={isLocked[index]}
          handleIsLocked={() => toggleLock(index)}
          handleCopy={() => copyToClipboard(color)}
        />
      ))}
    </div>
  );
}

export default PaletteContainer;
