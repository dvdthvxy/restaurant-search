import React from 'react';
import styled from 'styled-components'

const StyledButton = styled('button')({
    background: 'none',
})

const Button = ({children, ...props}) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;