import styled from "styled-components";
import Card from "./Card.jsx";
import deck from "../deck.jsx";

export default function CardList({ addOne }) {
    return (
        <Wrapper>
            {deck.map((card, i) => <Card
                key={i}
                index={i + 1}
                question={card.question}
                answer={card.answer}
                addOne={addOne}
            />)}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;
