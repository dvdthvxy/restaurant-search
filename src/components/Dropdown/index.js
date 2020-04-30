import React from 'react';
import styled from 'styled-components'

const StyledSelect = styled('select')({
    width: '150px',
    textAlign: 'center',
})

const Dropdown = ({label, defaultText, children, options = [], ...props}) => {
    return (
        <label>
            <p>{label}</p>
            <StyledSelect {...props}>
                <option defaultValue value="">{defaultText}</option>
                {options.map( item => 
                    
                <option key={`${label}${item}`} value={item}>{item}</option>
                    )}
            </StyledSelect>
        </label>
    );
};

export default Dropdown;