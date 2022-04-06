import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import moment from 'moment-timezone';
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import { Fragment, useState, MouseEvent } from "react";
import { StatusDot } from './style';

interface ColumnFirst {
    id:
    | "srno"
    | "totalAmountOfOrderPlaced"
    label: string;
    minWidth?: number;
    align?: "left" | "right";
    format?: (value: number) => string;
}

interface ColumnSecond {
    id:
    | "srno"
    | "dateOfOrder"
    | "productName"
    | "quantity"
    | "total"
    label: string;
    minWidth?: number;
    align?: "left" | "right";
    format?: (value: number) => string;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#0A759E',
        color: theme.palette.common.white,
        fontSize: '1vw',
        fontWeight: '600'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: '1vw',
        maxWidth: '200px',
        overflow: 'auto'
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const columnsFirst: readonly ColumnFirst[] = [
    {
        id: "srno",
        label: "Sr\u00a0No",
        minWidth: 30,
    },
    {
        id: "totalAmountOfOrderPlaced",
        label: "Total\u00a0Amount\u00a0Ordered",
        minWidth: 150,
    }
];


const columnsSecond: readonly ColumnSecond[] = [
    {
        id: "srno",
        label: "Sr\u00a0No",
        minWidth: 30,
    },
    {
        id: "dateOfOrder",
        label: "Date",
        minWidth: 150,
    },
    {
        id: "productName",
        label: "Product\u00a0Amount\u00a0Name",
        minWidth: 150,
    },
    {
        id: "quantity",
        label: "Quantity",
        minWidth: 150,
    },
    {
        id: "total",
        label: "Total",
        minWidth: 150,
    }
];

interface IOrderSummary {
    OrderSummary: {
        srno: number,
        totalAmountOfOrderPlaced: number,
    }[],
    last10DaysOrder?: {
        srno: number,
        dateOfOrder: string,
        productName: string,
        quantity: number,
        total: number
    }[]
}

/**
 *
 * @returns {ReactElement}
 */
const OrderSummary: React.FC<IOrderSummary> = ({ OrderSummary, last10DaysOrder = [] }) => {
    return (
        <Fragment>
            <div className='mt-5 ms-5 mr-5'>
                <label className="input-label display-6 mb-5"><b>Total Amount Ordered</b></label>

                <TableContainer>
                    <Table stickyHeader aria-label="equipment list" padding="normal" sx={{ height: 100, maxHeight: 600, boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', overflowX: 'unset' }}>
                        <TableHead>
                            <TableRow>
                                {columnsFirst.map((column) => {
                                    return (
                                        <StyledTableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth, maxWidth: 200 }}
                                        >
                                            {column.label}
                                        </StyledTableCell>
                                    )
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {OrderSummary
                                .map((item) => {
                                    return (
                                        <StyledTableRow hover role="checkbox" tabIndex={-1} key={item.srno}>
                                            {columnsFirst.map((column) => {
                                                const value = item[column.id];
                                                return (
                                                    <StyledTableCell key={column.id} align={column.align}>
                                                        {
                                                            column.id === 'srno' ? value : value.toLocaleString('en-IN', {
                                                                maximumFractionDigits: 2,
                                                                style: 'currency',
                                                                currency: 'INR'
                                                            })
                                                        }
                                                    </StyledTableCell>
                                                );

                                            })}
                                        </StyledTableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>

                <label className="input-label display-6 mb-5"><b>Last 10 Days Order</b></label>

                <TableContainer style={{ 'overflowY': 'scroll', height: '40vh'}}>
                    <Table stickyHeader aria-label="equipment list" padding="normal" sx={{ height: 100, maxHeight: 600, boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', overflowX: 'unset' }}>
                        <TableHead>
                            <TableRow>
                                {columnsSecond.map((column) => {
                                    return (
                                        <StyledTableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth, maxWidth: 200 }}
                                        >
                                            {column.label}
                                        </StyledTableCell>
                                    )
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {last10DaysOrder
                                .map((item) => {
                                    return (
                                        <StyledTableRow hover role="checkbox" tabIndex={-1} key={item.srno}>
                                            {columnsSecond.map((column) => {
                                                const value = item[column.id];
                                                return (
                                                    <StyledTableCell key={column.id} align={column.align}>
                                                        {
                                                            column.id === 'srno' || column.id === 'quantity'  ? value : value.toLocaleString('en-IN', {
                                                                maximumFractionDigits: 2,
                                                                style: 'currency',
                                                                currency: 'INR'
                                                            })
                                                        }
                                                    </StyledTableCell>
                                                );

                                            })}
                                        </StyledTableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Fragment>
    );
};

export default OrderSummary;
