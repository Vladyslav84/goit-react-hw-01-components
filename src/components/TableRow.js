import React from 'react';
import PropTypes from 'prop-types';

const TableRow = (props) => (
    <>
        <td>{props.type}</td>
        <td>{props.amount}</td>
        <td>{props.currency}</td>
    </>
)
TableRow.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};

export default TableRow;

