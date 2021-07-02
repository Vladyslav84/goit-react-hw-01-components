import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import s from './Transactions.module.css';

const TransactionHistory = ({ transactionArray }) => (
    <div className={s.container}>
        <table className={s.transactionHistory}>
            <thead className={s.thead}>
                <tr>
                    <th className={s.th}>TYPE</th>
                    <th className={s.th}>AMAUNT</th>
                    <th className={s.th}>CURRENCY</th>
                </tr>
            </thead>
            <tbody>
                {transactionArray.map((transactionItem) => (
                    <tr key={transactionItem.id} className={s.trow}>
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
    </div>
)

TransactionHistory.propTypes = {
    transactionArray: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })).isRequired,
}

export default TransactionHistory;