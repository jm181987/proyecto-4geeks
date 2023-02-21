import React, { useMemo, Fragment, useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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

export const MyEvents = () => {
    const {store, actions} = useContext(Context)
   
    const { user } = useAuth()


    const columns = useMemo(
		() => [
			{
				accessor: 'image',
				Header: 'EVENTOS',
				Cell: ({ value, row }) => {
					return (
						<div className="d-lg-flex">
							<div>
								<Link to="#">
									<Image src={value} alt="" className="rounded img-4by3-lg" />
								</Link>
							</div>
							<div className="ms-lg-3 mt-2 mt-lg-0">
								<h4 className="mb-1 h5">
									<Link to="#" className="text-inherit">
										{row.original.title}
									</Link>
								</h4>
								<ListGroup as="ul" bsPrefix="list-inline" className="fs-6 mb-0">
									<ListGroup.Item as="li" bsPrefix="list-inline-item">
										<i className="far fa-clock me-1"></i>
										{row.original.duration}
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix="list-inline-item">
										<LevelIcon level={row.original.level} />
										{row.original.level}
									</ListGroup.Item>
								</ListGroup>
							</div>
						</div>
					);
				}
			},
			{
				accessor: 'hoursbook',
				Header: 'Horas contratadas',
				Cell: ({ value, row }) => {
					return (
						<Fragment>
							<span className="text-warning">
								{value}
							</span>
					</Fragment>
					);
				}
			},

			{
				accessor: 'rating',
				Header: 'RATING',
				Cell: ({ value, row }) => {
					return (
						<Fragment>
							<span className="text-warning">
								{value}
								<Icon path={mdiStar} size={0.6} />
							</span>
							({row.original.ratingby})
						</Fragment>
					);
				}
			},

			{
				accessor: 'status',
				Header: 'ESTADO',
				Cell: ({ value }) => {
					return (
						<Badge
							bg={`${
								value === 'Draft'
									? 'info'
									: value === 'Live'
									? 'success'
									: value === 'Deleted'
									? 'danger'
									: 'warning'
							} `}
						>
							{value}
						</Badge>
					);
				}
			}
		],
		[]
	);
    const eventos = store.events.filter(function (datasource) {
        return (
            datasource.artist_id ===
            user.uid
        );
    })

    const data = useMemo(() => eventos, []);

    const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		previousPage,
		state,
		gotoPage,
		pageCount,
		prepareRow,
	} = useTable(
		{
			columns,
			data,
			initialState: {
				pageSize: 6,
				hiddenColumns: columns.map((column) => {
					if (column.show === false) return column.accessor || column.id;
					else return false;
				})
			}
		},
        usePagination
	);

  return (
    <DashboardLayout>
        <Card className='border-0'>
            <Card.Header>
                <div className='mb-3 mb-lg-0'>
                    <h3 className='text-dark mb-0'>Mis Eventos</h3>
                    <p className='mb-0'>Administra tus eventos y mira en que estado se encuentran</p>
                </div>
            </Card.Header>
            <Card.Body className="p-0 pb-5">
					<Row>
						<Col lg={12} md={12} sm={12}>
							<div className="table-responsive ">
								<Table {...getTableProps()} className="text-nowrap">
									<thead className="table-light">
										{headerGroups.map((headerGroup) => (
											<tr {...headerGroup.getHeaderGroupProps()}>
												{headerGroup.headers.map((column) => (
													<th className='text-white bg-primary' {...column.getHeaderProps()}>
														{column.render('Header')}
													</th>
												))}
											</tr>
										))}
									</thead>
									<tbody {...getTableBodyProps()}>
										{page.map((row) => {
											prepareRow(row);
											return (
												<tr {...row.getRowProps()}>
													{row.cells.map((cell) => {
														return (
															<td {...cell.getCellProps()}>
																{cell.render('Cell')}
															</td>
														);
													})}
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
