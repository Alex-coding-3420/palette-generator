import Palette from './components/Palette';
function App() {
  return (
    <div className='palette-container'>
      {Array.from({ length: 5 }).map((_, idx) => (
        <Palette key={idx} />
      ))}
    </div>
  );
}

export default App;
