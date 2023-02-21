import React, { useMemo, Fragment, useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchData } from '../../../firebase/firebase.js';
import {
    Card,
    Row,
    Col,
    Image,
    Badge,
    Table,
    ListGroup
} from 'react-bootstrap'
import {
    useTable,
    usePagination
} from 'react-table';
import { Context } from '../../../store/appContext.js';
import { DashboardLayout } from './DashboardLayout.jsx'
import { numberWithCommas } from '../../../component/helper/utils.jsx';
import LevelIcon from '../../../component/common/miscellaneous/LevelIcon.jsx';

// import MDI icons
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';
import { useAuth } from '../../../context/authContext.js';

export const Orders = () => {
    const { store, actions } = useContext(Context)
    const [data, setData] = useState([]);
    const { user } = useAuth()
    useEffect(() => {
        fetchData("orderData").then((d) => setData(d));
    }, []);



    return (
        <DashboardLayout>
            <Card className='border-0'>
                <Card.Header>
                    <div className='mb-3 mb-lg-0'>
                        <h3 className='text-dark mb-0'>Mis Ordenes</h3>
                        <p className='mb-0'>Mira las ordenes que tienes de tus eventos para entrar en contacto con tus clientes...</p>
                    </div>
                </Card.Header>
                <Card.Body className="p-0 pb-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="table-responsive ">
                                <Table className="text-nowrap">
                                    <thead className="table-light">
                                        <tr >
                                            <th className='text-white bg-primary'>Nombre</th>
                                            <th className='text-white bg-primary'>Precio</th>
                                            <th className='text-white bg-primary'>Fecha</th>
                                            <th className='text-white bg-primary'>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data
                                            .filter((datasource) => datasource.artistId === user.uid)
                                            .map((data, index) => {
                                                const payerName = data.payer?.name || {};

                                                const fullName = `${payerName.given_name || ""} ${payerName.surname || ""
                                                    }`.trim();
                                                const amount = data.purchase_units.reduce((acc, val) => {
                                                    const thisValue = +(val.amount?.value || 0);
                                                    return acc + thisValue;
                                                }, 0);
                                                return (
                                                    <tr key={index}>
                                                        <td>{fullName}</td>
                                                        <td>{amount}</td>
                                                        <td>{new Date(data.create_time).toLocaleString()}</td>
                                                        <td>{data.payer?.email_address}</td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </DashboardLayout>
    )
}
