import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Button, Table } from 'react-bootstrap';
import { useAuthContext } from "@asgardeo/auth-react";
import EditButton from './EditButton';
import LoadingSpinner from '../LoadingSpinner';

export default function Admin() {
    const { getAccessToken } = useAuthContext();
    const [items, setItems] = useState(null); 

    useEffect(() => {
        document.title = "Admin | PetStore"

        getAccessToken()
            .then((decodedIdToken) => {
                const endpoint = 'https://2c224c5f-1658-4835-8e36-e39a787ada3c-dev.e1-us-east-azure.choreoapis.dev/cqge/admin-service/1.0.0/';

                const axiosInstance = axios.create({
                    baseURL: endpoint,
                    headers: {
                        Authorization: `Bearer ${decodedIdToken}`,
                    },
                });

                axiosInstance
                    .get('/items')
                    .then((response) => {
                        // Handle the response data
                        setItems(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }).catch((error) => {
                console.log(error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (items === null) {
        return (
            <LoadingSpinner />
        );
    }

    const listItems = items.map((item) =>
        <tr className="align-middle" key={item.id}>
            <td>{item.title}</td>
            <td>{item.description} </td>
            <td>{item.includes}</td>
            <td>{item.intendedFor}</td>
            <td>{item.color}</td>
            <td>{item.material}</td>
            <td>${item.price}</td>
            <td><EditButton item={item} />&nbsp;<Button variant="danger" size="sm">Delete</Button></td>
        </tr>
    );

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
                        {listItems}
                        <tr className="text-end">
                            <td colSpan="8"><Button variant="primary" className="float-right">Add New Product</Button></td>
                        </tr>
                    </thead>
                </Table>
            </Container>
        </>
    );
}