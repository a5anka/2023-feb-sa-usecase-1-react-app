import { Spinner, Container } from 'react-bootstrap';

function LoadingSpinner() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Container>
  );
}
 
export default LoadingSpinner;