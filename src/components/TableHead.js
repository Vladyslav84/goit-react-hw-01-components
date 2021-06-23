import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

const TransactionHistory = ({ transactionArray }) => (
    <table className="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>

            {transactionArray.map((transactionItem) => (

                <tr key={transactionItem.id}>
                    <TableRow
                        id={transactionItem.id}
                        type={transactionItem.type}
                        amount={transactionItem.amount}
                        currency={transactionItem.currency}
                    />
                </tr>

            ))}


        </tbody>
    </table>
)

TransactionHistory.propTypes = {
    transactionArray: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })).isRequired,
}

export default TransactionHistory;