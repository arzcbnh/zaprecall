import styled from "styled-components";

import seta_play from "../assets/seta_play.png";
import icone_certo from "../assets/icone_certo.png";
import icone_quase from "../assets/icone_quase.png";
import icone_erro from "../assets/icone_erro.png";

const colorToIcon = {
    black: seta_play,
    "#2fbe34": icone_certo,
    "#ff922e": icone_quase,
    "#ff3030": icone_erro
}

export default function IndexFace({ index, visible, setVisibleFace, color }) {
    return (
        <Wrapper $visible={visible} $color={color}>
            Pergunta {index}
            <SetaPlay src={colorToIcon[color]} onClick={() => setVisibleFace("back")} />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    
    display: ${props => props.$visible ? "flex" : "none"};
    justify-content: space-between;
    align-items: center;
    
    color: ${props => props.$color};
    text-decoration: ${props => props.$color === "black" ? "none" : "line-through"};
    font-weight: 700;
    user-select: none;
`;

const SetaPlay = styled.img`
    width: 20px;
`;
