import styled from "styled-components";
import Buttons from "./Buttons.jsx";

export default function FrontFace({ answer, visible, scoreCard }) {
    return (
        <Wrapper $visible={visible}>
            {answer}
            <Buttons scoreCard={scoreCard} />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    min-height: 130px;

    font-size: 18px;

    display: ${props => props.$visible ? "flex" : "none"};
    flex-direction: column;
    justify-content: space-between;
`;
