import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Logo() {
    return (
        <Wrapper>
            <Logomark src={logo} />
            ZapRecall
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 25px 0;

    color: white;
    font-family: "Righteous", serif;
    font-size: 36px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.7em;
`;

const Logomark = styled.img`
    width: 52px;
`;
