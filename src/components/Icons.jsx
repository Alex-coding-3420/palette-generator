import { FaLock, FaUnlock, FaCopy, FaArrowsAltH } from 'react-icons/fa';

function Icons() {
  return (
    <div className='icon-container'>
      <FaArrowsAltH className='icon' />
      <FaCopy className='icon' />
      <FaLock className='icon' />
      <FaUnlock className='icon' />
    </div>
  );
}

export default Icons;
