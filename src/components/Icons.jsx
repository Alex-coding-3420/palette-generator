import { FaLock, FaUnlock, FaCopy } from 'react-icons/fa';

function Icons({ isLocked, handleIsLocked, handleCopy }) {
  return (
    <div className={`icon-container ${isLocked ? 'locked' : ''}`}>
      <FaCopy onClick={handleCopy} className='icon' />
      {isLocked ? (
        <FaLock onClick={handleIsLocked} className='icon' />
      ) : (
        <FaUnlock onClick={handleIsLocked} className='icon' />
      )}
    </div>
  );
}

export default Icons;
