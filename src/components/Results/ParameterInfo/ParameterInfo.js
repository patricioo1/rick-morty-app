import React from 'react'

const ParameterInfo = ({ parameterName, value }) => {
    if (!parameterName || !value) {
        return null;
    }
    return (
          <p>{`${parameterName}: ${value}`}</p>
    );
};

export default ParameterInfo;