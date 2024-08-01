import PaletteInfo from './PaletteInfo';
import Icons from './Icons';

function Palette({ color, isLocked, handleIsLocked, handleCopy }) {
  const isColorDark = (color) => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5;
  };

  const c = isColorDark(color) ? `#f8f9fa` : `#212529`;
  return (
    <div className='palette' style={{ backgroundColor: color, color: c }}>
      <Icons
        isLocked={isLocked}
        handleIsLocked={handleIsLocked}
        handleCopy={handleCopy}
      />
      <PaletteInfo color={color} />
    </div>
  );
}

export default Palette;
