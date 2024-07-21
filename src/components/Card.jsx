import React from "react";
import styled from "styled-components";

import IndexFace from "./IndexFace.jsx";
import FrontFace from "./FrontFace.jsx";
import BackFace from "./BackFace.jsx";

export default function Card({ index, question, answer, addOne }) {
    const [visibleFace, setVisibleFace] = React.useState("index");
    const [color, setColor] = React.useState("black");
    const [scored, setScored] = React.useState(false);

    function scoreCard(color) {
        setVisibleFace("index");
        setColor(color);
        setScored(true);
        addOne();
    }

    return (
        <Wrapper>
            <IndexFace
                index={index}
                visible={visibleFace === "index"}
                setVisibleFace={!scored ? setVisibleFace : () => { }}
                color={color}
            />
            <BackFace
                question={question}
                visible={visibleFace === "back"}
                setVisibleFace={setVisibleFace}
            />
            <FrontFace
                answer={answer}
                visible={visibleFace === "front"}
                scoreCard={scoreCard}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 300px;
    min-height: 65px;
    padding: 1em;
    background: white;
    border-radius: 5px;
    box-shadow: 0px 4px 5px 0px #00000026;

    display: flex;
    align-items: stretch;

    font-family: "Recursive", sans-serif;
`;
