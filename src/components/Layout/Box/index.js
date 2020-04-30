import React from 'react';
import styled from 'styled-components'
import {
    typography,
    space,
    color,
    layout,
    flexbox,
    border,
    position,
    shadow,
  } from 'styled-system';

const Box = ({children, ...props}) => {
    return (
        <div {...props}>
            {children}
        </div>
    );
};

const StyledBox = styled(Box)(
    typography,
    space,
    color,
    layout,
    flexbox,
    border,
    position,
    shadow,
)

export default StyledBox;