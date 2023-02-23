import React, { useEffect, useState } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import EditButton from './EditButton';

export default function Admin() {
    const [showEditModal, setShowEditModal] = useState(false);
    const [itemToEdit, setItemToEdit] = useState(null);

    const handleEdit = (item) => {
        setItemToEdit(item);
        setShowEditModal(true);
      };

    useEffect(() => {
        document.title = "Admin | PetStore"
    }, []);

    // Initialize an item object
    const item = {
        id: 1,
        title: "Top Paw® Valentine's Day Single Dog Sweater",
        description: "Dress your pup up appropriately for the holiday with the Top Paw® Valentine's Day Single Dog Sweater. This cute and cozy sweater features a red heart on the back and a red bow on the front. It's made of soft, comfortable cotton and polyester, and it's machine washable for easy care. Only at PetSmart.",
        includes: "1 Sweater",
        intendedFor: "Dogs",
        color: "Red, White, Black",
        material: "100% Acrylic",
        price: 9.99
    };

    return (
        <>
            <Container className="mt-5">
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th scope="col" width="150px">Title</th>
                            <th scope="col" width="400px">Description</th>
                            <th scope="col">Includes</th>
                            <th scope="col">Intended For</th>
                            <th scope="col" width="50px">Color</th>
                            <th scope="col">Material</th>
                            <th scope="col">Price</th>
                            <th scope="col">&nbsp;</th>
                        </tr>
                        <tr className="align-middle">
                            <td>Top Paw® Valentine's Day Single Dog Sweater</td>
                            <td>Top Paw® Valentine's Day Single Dog Sweater is a cute and cozy way to show your dog some love this Valentine's Day. This sweater features a red heart on the back and a red bow on the front. It's made of soft, comfortable cotton and polyester blend fabric. It's machine washable for easy care. This sweater is available in sizes XS, S, M, L, XL and XXL... </td>
                            <td>1 Sweater</td>
                            <td>Dogs</td>
                            <td>Red, White, Black</td>
                            <td>100% Acrylic</td>
                            <td>$14.99</td>
                            <td><EditButton item={item} />&nbsp;<Button variant="danger" size="sm">Delete</Button></td>
                        </tr>
                        <tr className="align-middle">
                            <td>Top Paw® Valentine's Day Single Dog Sweater</td>
                            <td>Top Paw® Valentine's Day Single Dog Sweater is a cute and cozy way to show your dog some love this Valentine's Day. This sweater features a red heart on the back and a red bow on the front. It's made of soft, comfortable cotton and polyester blend fabric. It's machine washable for easy care. This sweater is available in sizes XS, S, M, L, XL and XXL... </td>
                            <td>1 Sweater</td>
                            <td>Dogs</td>
                            <td>Red, White, Black</td>
                            <td>100% Acrylic</td>
                            <td>$14.99</td>
                            <td><Button variant="primary" size="sm">Edit</Button>&nbsp;<Button variant="danger" size="sm">Delete</Button></td>
                        </tr>
                        <tr className="align-middle">
                            <td>Top Paw® Valentine's Day Single Dog Sweater</td>
                            <td>Top Paw® Valentine's Day Single Dog Sweater is a cute and cozy way to show your dog some love this Valentine's Day. This sweater features a red heart on the back and a red bow on the front. It's made of soft, comfortable cotton and polyester blend fabric. It's machine washable for easy care. This sweater is available in sizes XS, S, M, L, XL and XXL... </td>
                            <td>1 Sweater</td>
                            <td>Dogs</td>
                            <td>Red, White, Black</td>
                            <td>100% Acrylic</td>
                            <td>$14.99</td>
                            <td><Button variant="primary" size="sm">Edit</Button>&nbsp;<Button variant="danger" size="sm">Delete</Button></td>
                        </tr>
                        <tr className="text-end">
                            <td colSpan="8"><Button variant="primary" className="float-right">Add New Product</Button></td>
                        </tr>
                    </thead>
                </Table>
            </Container>
        </>
    );
}