import { useEffect, useState } from 'react';

async function fetchColorName(color) {
  const hex = color.replace('#', '');
  try {
    const res = await fetch(`https://www.thecolorapi.com/id?hex=${hex}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data.name.value;
  } catch (error) {
    console.error('Error fetching color name:', error);
    return 'Unknown Color';
  }
}

function PaletteInfo({ color }) {
  const [name, setName] = useState('');

  useEffect(() => {
    async function getColorName() {
      const fetchedName = await fetchColorName(color);
      setName(fetchedName || color); // Use the color name if available, otherwise use the hex code
    }

    getColorName();
  }, [color]);
  return (
    <div className='palette-info'>
      <p className='palette-name'>{name}</p>
      <p className='palette-value'>{color}</p>
    </div>
  );
}

export default PaletteInfo;
