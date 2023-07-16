import PropTypes from 'prop-types';
import  "./statistics.css";

export default function Statistics({ title, stats }) {
    return (
        <section className='statistics'>
            <h2 className='title'>{title}</h2>

            {title && (
                <ul className='statlist'>
                    {stats.map((stat) => (
                        <li className='item' style={{ backgroundColor: getRandomHexColor() }} key={stat.id}>
                            <span className='label'>{stat.label}</span>
                            <span className='percentage'>{stat.percentage}%</span>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
