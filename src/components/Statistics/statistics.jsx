import PropTypes from 'prop-types';
import css from './statistics.module.css';

const Statistics = ({
    title,
    stats,
}) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.statList}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li
                            key={id}
                            className={css.item}>
                            
                            <span className={css.label}>{label}</span>
                            <span className={css.percentage}>{percentage}%</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    statList: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.string.isRequired,
    }),
};

export default Statistics;