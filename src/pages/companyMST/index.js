import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import {
    Container,
    Card,
    CardBody,
    Button,
} from "reactstrap";
import Axios from '../../config';



const CompanyMST = () => {

    const [companyData, setCompanyData] = useState([])
    const getCompanyMSTURL = {
        method: "GET",
        url: "cityMST/all/"
    }

    useEffect(() => {
        Axios({ ...getCompanyMSTURL }).then(resp => {
            setCompanyData(resp.data.data)
            // unable to list out due to out-of-memory-crash, As total count of data: 147928 
            // data has been coming without Pagination
            // need to add pagination from backend to handle data
        }).catch((e) => {
            console.log('e :>> ', e);
        }).finally(() => {
        })
    }, [])

    const columns = [

        {
            name: "countryMSTId",
            cell: (row) => <span>{row.countryMSTId}</span>,
            minWidth: "120px"
        },
        {
            name: "stateMSTId",
            cell: (row) => <span>{row.stateMSTId}</span>,
            minWidth: "120px"
        },
        {
            name: "cityName",
            cell: (row) => <span>{row.cityName}</span>,
            minWidth: "120px"
        },
        {
            name: "stateName",
            cell: (row) => <span>{row.stateName}</span>,
            minWidth: "120px"
        },
        {
            name: "countryName",
            cell: (row) => <span>{row.countryName}</span>,
            minWidth: "120px"
        },
        {
            name: "active",
            cell: (row) => <span>{row.active}</span>,
            minWidth: "120px"
        },
        {
            name: "Actions",
            width: "220px",
            // center:true,
            cell: (row) => (
                <div className='d-flex'>
                    <Button color="secondary"
                        type="button"
                        onClick={() => {
                            handleToggle()
                            // setIsMode({ isForceResetPassword: true })
                            // setUserData(row)
                        }}>
                        Edit
                    </Button>
                </div>
            )
        },

    ];
    return (
        <Container>
            <Card>
                <CardBody>
                    <DataTable
                        columns={columns}
                        data={companyData}
                    />
                </CardBody>
            </Card>
        </Container>
    )
}

export default CompanyMST