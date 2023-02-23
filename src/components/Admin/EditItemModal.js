import { Modal, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

function EditItemModal(props) {
  const { item, onSave, onCancel, show } = props;

  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [includes, setIncludes] = useState(item.includes);
  const [intendedFor, setIntendedFor] = useState(item.intendedFor);
  const [color, setColor] = useState(item.color);
  const [material, setMaterial] = useState(item.material);
  const [price, setPrice] = useState(item.price);

  const handleSave = () => {
    onSave({
      ...item,
      title,
      description,
      includes,
      intendedFor,
      color,
      material,
      price
    });
  };

  return (
    <Modal show={show} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="includes">
            <Form.Label>Includes</Form.Label>
            <Form.Control
              as="textarea"
              value={includes}
              onChange={(event) => setIncludes(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="intendedFor">
            <Form.Label>Intended For</Form.Label>
            <Form.Control
              type="text"
              value={intendedFor}
              onChange={(event) => setIntendedFor(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="color">
            <Form.Label>Color</Form.Label>
            <Form.Control
              type="text"
              value={color}
              onChange={(event) => setColor(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="material">
            <Form.Label>Material</Form.Label>
            <Form.Control
              type="text"
              value={material}
              onChange={(event) => setMaterial(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

// export EditItemModal
export default EditItemModal;