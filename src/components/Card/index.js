import React from 'react';
import { Box } from '../index'
import styled from 'styled-components'

const Card = ({children, ...props}) => {
    return (
        <Box 
            as='li'
            {...props}
        >
            {children}
        </Box>
    );
};

const StyledCard = styled(Card)({
    marginBottom: '20px',
    width: '100%',
    listStyle: 'none',
    border: '1px solid black',
    boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)'
})

export default StyledCard