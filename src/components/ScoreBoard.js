import React from 'react';
import styled from 'styled-components';

const StyledScoreBoard = styled.div`
    grid-column: 1 / 3;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ScoreBoard = () => {
	return (
        <StyledScoreBoard>
            <h1>Matches</h1>
        </StyledScoreBoard>
    );
}

export default ScoreBoard;
