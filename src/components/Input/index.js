import React from 'react';
import styled from 'styled-components'

const sharedStyles = {
    display: 'block'
}

const InputBox = styled('input')({
    ...sharedStyles,
    padding: '10px',
    textAlign: 'center',
    width: '300px',
    marginBottom: '16px',
})

const Text = styled('p')({
    ...sharedStyles
})

const Container = styled('label')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

  
const Input = ({label, ...props}) => {
    return (
    <Container>
        <Text>{label}</Text>
        <InputBox 
            type='text'
            {...props}/>
    </Container>
    );
};

export default Input;