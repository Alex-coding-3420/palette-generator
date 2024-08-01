import PaletteInfo from './PaletteInfo';
import Icons from './Icons';
import { useState } from 'react';

function Palette() {
  const [hex, setHex] = useState('');
  const [isLocked, setIsLocked] = useState(false);
  const [isLight, setIsLight] = useState(true);

  return (
    <div className='palette'>
      <Icons />
      <PaletteInfo />
    </div>
  );
}

export default Palette;
