import React from 'react';
import PropTypes from 'prop-types';
import s from '../css/Statistics.module.css'
const Statistics = (props) => {

    return (

        <>
            <span className={s.label}>{props.label}</span><br />
            <span className={s.percentage}>{props.percentage}%</span>
        </>

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