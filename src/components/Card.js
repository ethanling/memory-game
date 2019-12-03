import React, { useState } from "react";
import styled from "styled-components";
import { Flipper, Flipped } from "react-flip-toolkit";

const StyledCardFront = styled.div`
    display: flex;
    justify-content: center;
    height: 200px;
`;

const StyledCardBack = styled.div`
    height: 200px;
    width: 200px;
    background-color: red;
`;

const StyledImg = styled.img`
    width: 200px;
`;

const Front = ({ toggleCardFlip, link, title }) => (
    <Flipped flipId="card">
        <StyledCardFront onClick={toggleCardFlip}>
            <StyledImg src={link} alt={title} />
        </StyledCardFront>
    </Flipped>
);

const Back = ({ toggleCardFlip }) => (
    <Flipped flipId="front">
        <StyledCardBack onClick={toggleCardFlip} />
    </Flipped>
);

const Card = ({ link, title, flipped }) => {
    const [cardFlip, setCardFlip] = useState(false);
    const toggleCardFlip = () => setCardFlip(prevState => !prevState);

    return (
        <Flipper flipkey={toggleCardFlip}>
            {cardFlip ? (
                <Front 
                    toggleCardFlip={toggleCardFlip} 
                    link={link}
                    title={title}
                />
            ) : (
                <Back toggleCardFlip={toggleCardFlip} />
            )}
        </Flipper>
    );
};

export default Card;
