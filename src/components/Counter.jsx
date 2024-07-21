import styled from "styled-components";

export default function Counter({ count }) {
    return <Wrapper>{count}/8 CONCLUÍDOS</Wrapper>;
}

const Wrapper = styled.div`
    padding: 1.5em;
    background: white;

    font-family: "Recursive", sans-serif;

    display: flex;
    justify-content: center;
    align-items: center;
`;
