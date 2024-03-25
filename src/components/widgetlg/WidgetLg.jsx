import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Avatar, { genConfig } from "react-nice-avatar";
import WidgetLgCSS from "./widgetlg.module.css";

const Button = ({ type }) => {
    return <button className={WidgetLgCSS.widgetLgButton + " " + WidgetLgCSS[type]}>{type}</button>
}

Button.propTypes = {
    type: PropTypes.oneOf(["Approved", "Rejected", "Pending"])
};

const WidgetLg = () => {
    const transactions = useSelector((state) => state.transactions.transactions)

    return (
        <div className={WidgetLgCSS.widgetLg}>
            <h3 className={WidgetLgCSS.widgetLgTitle}>Latest transactions</h3>
            <table className={WidgetLgCSS.widgetLgTable}>
                <thead className={WidgetLgCSS.widgetLgTr}>
                    <tr>
                        <th className={WidgetLgCSS.widgetLgTh}>Customer</th>
                        <th className={WidgetLgCSS.widgetLgTh}>Date</th>
                        <th className={WidgetLgCSS.widgetLgTh}>Amount</th>
                        <th className={WidgetLgCSS.widgetLgTh}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => {
                        const avatarConfig = genConfig(transaction.email)

                        return (
                            <tr className={WidgetLgCSS.widgetLgTr} key={transaction.email}>
                                <td className={WidgetLgCSS.widgetLgUser}>
                                    <Avatar className={WidgetLgCSS.widgetLgImg} {...avatarConfig} />
                                    <span className={WidgetLgCSS.widgetLgName}>{transaction.fullName}</span>
                                </td>
                                <td className={WidgetLgCSS.widgetLgDate}>{transaction.date}</td>
                                <td className={WidgetLgCSS.widgetLgAmount}>₹ {transaction.amount}</td>
                                <td className={WidgetLgCSS.widgetLgStatus}>
                                    <Button type={transaction.status} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default WidgetLg