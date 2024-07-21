import React from "react";
import styled from "styled-components";

import Logo from "./components/Logo.jsx"
import CardList from "./components/CardList.jsx";
import Counter from "./components/Counter.jsx"

export default function App() {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <Main>
                <Logo />
                <CardList addOne={() => setCount(count + 1)} />
            </Main>
            <Counter count={count} />
        </>
    );
}

const Main = styled.main`
    padding: 1em;
    background: #fb6b6b;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    flex: 1;
`;

