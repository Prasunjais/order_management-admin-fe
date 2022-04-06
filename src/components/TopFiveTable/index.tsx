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

interface Column {
    id:  
    | "srno"
    | "product"
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


const columns: readonly Column[] = [
    {
        id: "srno",
        label: "Sr\u00a0No",
        minWidth: 30,
    },
    {
        id: "product",
        label: "Product",
        minWidth: 150,
    }
];

interface IequipmentList {
    topFiveTable: {
        srno: number,
        product: string,
    }[],
}

/**
 *
 * @returns {ReactElement}
 */
const TopFiveTable: React.FC<IequipmentList> = ({ topFiveTable }) => {
    return (
        <Fragment>
            <div className='mt-5 ms-5 mr-5'>
                <label className="input-label display-6 mb-5"><b>Top 5</b></label>
                <TableContainer>
                    <Table stickyHeader aria-label="equipment list" padding="normal" sx={{ height: 100, maxHeight: 600, boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', overflowX: 'unset' }}>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => {
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
                            {topFiveTable
                                .map((item) => {
                                    return (
                                        <StyledTableRow hover role="checkbox" tabIndex={-1} key={item.srno}>
                                            {columns.map((column) => {
                                                const value = item[column.id];
                                                return (
                                                    <StyledTableCell key={column.id} align={column.align}>
                                                        {value}
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

export default TopFiveTable;
