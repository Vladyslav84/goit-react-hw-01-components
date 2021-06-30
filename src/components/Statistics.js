import React from 'react';
import PropTypes from 'prop-types';

const Statistics = (props) => {

    return (

        <>
            <span className="label">{props.label}</span>
            <span className="percentage">{props.percentage}</span>
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