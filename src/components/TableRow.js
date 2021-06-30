import React from 'react';
import PropTypes from 'prop-types';
import s from '../css/Transactions.module.css';

const TableRow = (props) => (
    <>
        <td className={s.td}>{props.type}</td>
        <td className={s.td}>{props.amount}</td>
        <td className={s.td}>{props.currency}</td>
    </>
)
TableRow.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};

export default TableRow;