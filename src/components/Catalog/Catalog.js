import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as regThumbsUp } from '@fortawesome/free-regular-svg-icons';
import LoadingSpinner from '../LoadingSpinner';
// import PetStoreNav from '../../App.js';

const ITEM_ENTRIES = gql`
query MyQuery {
  all {
    color
    displayName
    includes
    intendedFor
    itemCode
    material
    price
  }
}
`;

// Component to render the item list
const PetItemList = () => {
  const { loading, error, data } = useQuery(ITEM_ENTRIES);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error : {error.message}</p>;

  const itemPrice = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginRight: '50px'
  };
  // Show items in each row
  const listItems = data.all.map((item) =>
    <Col key={item.itemCode}>
      <h4>{item.displayName}</h4>
      <img src={require('./item-1.png')} width="300" alt="dog" /><br />
      <p>
        <b>Includes: </b>{item.includes}<br />
        <b>Intended For:</b> {item.intendedFor}<br />
        <b>Color:</b>{item.color}<br />
        <b>Material: </b>{item.material}<br />
      </p>
      <br />
      <span style={itemPrice}>$ {item.price}</span> <Button variant="danger">Add to cart</Button>
      <br /><br />
      Follow updates &nbsp;&nbsp;<FontAwesomeIcon icon={regThumbsUp} />
    </Col>
  );

  return (
    <>
      <Container>
        <Row>
          {listItems}
        </Row>
      </Container>
    </>
  );
};


export default function Catalog() {
  useEffect(() => {
    document.title = 'PetStore Catalog';
  }, []);
  return (

    <>
      <PetItemList />
    </>
  );
}