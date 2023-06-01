
import Modal from '../src/Components/Modal.jsx'
import { useState } from 'react';
import Button from '../src/Components/Button.jsx'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <>
    <div>
      <Button color='primary' variant='outlined' onClick={handleOpenModal}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
    </>
    
  );
};

export default App;
