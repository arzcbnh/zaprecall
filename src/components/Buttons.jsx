import styled from "styled-components";

export default function Buttons({ scoreCard }) {
    return (
        <Wrapper>
            <Button $color="#ff3030" onClick={() => scoreCard("#ff3030")}>Não lembrei</Button>
            <Button $color="#ff922e" onClick={() => scoreCard("#ff922e")}>Quase não lembrei</Button>
            <Button $color="#2fbe34" onClick={() => scoreCard("#2fbe34")}>Zap!</Button>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    gap: 0.6em;

    color: white;
    font-size: 12px;
`;

const Button = styled.div`
    background: ${props => props.$color};
    padding: 0.5em;
    border-radius: 5px;
    text-align: center;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    user-select: none;
`;
