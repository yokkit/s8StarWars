import React from 'react'
import styled from 'styled-components';

const PageTitleStyle = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
  color: #DDD;
`

const PageTitle = ({message}) => {
    return (
        <PageTitleStyle>
            {message}
        </PageTitleStyle>
    )
}

export default PageTitle
