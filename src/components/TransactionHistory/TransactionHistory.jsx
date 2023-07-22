import PropTypes from 'prop-types';

import  css from './transactionHistory.module.css';

console.log('TransactionHistory :>> ', TransactionHistory);
export default function TransactionHistory({ items }) {
    return (
        <table className={css.TransactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
     items: PropTypes.arrayOf(
         PropTypes.shape({
             id: PropTypes.number.isRequired,
             type: PropTypes.string.isRequired,
             amount: PropTypes.number.isRequired,
             curency: PropTypes.number.isRequired
         })
     )
};