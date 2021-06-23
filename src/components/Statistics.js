import React from 'react';
import PropTypes from 'prop-types';

const Statistics = (props) => {

    return (
        <section className="statistics">
            <h2 className="title">{props.title}</h2>

            <ul className="stat-list">
                <li className="item">
                    <span className="label">{props.label}</span>
                    <span className="percentage">{props.percentage}</span>
                </li>
            </ul>
        </section>
    )
};

Statistics.defaultProps = {

    title: null,
};

Statistics.propTypes = {

    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    title: PropTypes.string,
};

export default Statistics;