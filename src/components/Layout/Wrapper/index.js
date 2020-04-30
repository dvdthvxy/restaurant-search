import Box from '../Box'
import css from '@styled-system/css'
import styled from 'styled-components'

const Wrapper = styled(Box)({
    margin: '0 auto'
},
css({
    width: ['95%', '80%'],
}),
)

export default Wrapper