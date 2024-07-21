import styled from "styled-components";
import seta_virar from "../assets/seta_virar.png";

export default function BackFace({ question, visible, setVisibleFace }) {
    return (
        <Wrapper $visible={visible}>
            {question}
            <SetaVirar src={seta_virar} onClick={() => setVisibleFace("front")} />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    min-height: 100px;

    font-size: 18px;

    display: ${props => props.$visible ? "flex" : "none"};
    position: relative;
`;

const SetaVirar = styled.img`
    width: 20px;
    position: absolute;
    right: 0;
    bottom: 0;
`;
