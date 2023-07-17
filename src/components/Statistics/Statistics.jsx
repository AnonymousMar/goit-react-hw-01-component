import PropTypes from 'prop-types';
import  css from"./statistics.module.css";

export default function Statistics(props) {
    const { title, stats } = props;

    return (
        <section className={css.block}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.list}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li className={css.listItem} style={{ backgroundColor: getRandomHexColor() }}  key={id}>
                            <span className={css.label}>{label}</span>
                            <span className={css.percentage}>{percentage}%</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

Statistics.protoTypes = {
    title: PropTypes.string,
    stats: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}