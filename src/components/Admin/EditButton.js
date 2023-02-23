import { useState } from 'react';
import { Button } from 'react-bootstrap';
import EditItemModal from './EditItemModal';

function EditButton(props) {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleSave = (editedItem) => {
    // Do something with the edited item, e.g. send a PUT request to update the item on the server
    setShowEditModal(false);
  };

  const handleCancel = () => {
    setShowEditModal(false);
  };
  return (
    <>
      <Button variant="primary" size="sm" onClick={handleEdit}>Edit</Button>
      <EditItemModal
        item={props.item}
        onSave={handleSave}
        onCancel={handleCancel}
        show={showEditModal}
      />
    </>
  );
}

export default EditButton;