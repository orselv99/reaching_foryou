import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
margin: 0 0 50px 0;
`;
const ViewArea = styled.div``;

export const Preview = (prop: { html: string }) => {
    console.log(prop.html);
    return (
        <Container>
            <p> 미리보기 </p>
            <ViewArea dangerouslySetInnerHTML={{ __html: prop.html }} />
        </Container>
    );
}