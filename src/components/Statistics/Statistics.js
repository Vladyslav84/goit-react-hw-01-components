import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const backGround = ["green", "blue", "gray", "yellow", "orange", "purple", "pink"];

const Statistics = ({ title, stats }) => {

    return (
        <section className={s.wrapper}>
            <div className={s.mainSection}>
                {title && <h2 className={s.title}>{title}</h2>}
                <ul className={s.statList}>
                    {stats.map((statData) => (
                        <li key={statData.id} className={s.item} style={{ backgroundColor: true ? backGround[Math.floor(Math.random() * backGround.length)] : 'teal' }}>
                            <span className={s.label}>{statData.label}</span><br />
                            <span className={s.percentage}>{statData.percentage}%</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )

};

Statistics.defaultProps = {
    title: null,
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        title: PropTypes.string,
    })).isRequired,
}
export default Statistics;