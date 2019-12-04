import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components';

const StyledFront = styled.div`
    height: 200px;
    width: 200px;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f3f3f3;
    border: 10px solid #c1c1c1;
    box-shadow: 0 0 15px 0 #999;
`;

const StyledCardImage = styled.img`
    object-fit: contain; 
    height: 60%;
    width: 60%;
`;

const StyledBack = styled.div`
    height: 200px;
    width: 200px;
    margin: 20px;
    background: #ccc;
    border: 10px solid #999;
    box-shadow: 0 0 10px 0 #1d1d1d;
`;

const Front = ({title, link, toggleFlip}) => (
    <StyledFront onClick={toggleFlip}>
		<StyledCardImage src={link} alt={title} />
	</StyledFront>
)

const Back = ({ toggleFlip }) => (
	<StyledBack onClick={toggleFlip}></StyledBack>
)

const Card = ({title, link}) => {
	const [isFlipped, setFlipped] = useState(false);
	const toggleFlip = () => {
        setFlipped(prevState => !prevState);
        console.log("toggled")
    }

	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >
			<Front title={title} link={link} toggleFlip={toggleFlip} />	
			<Back toggleFlip={toggleFlip} />
		</ReactCardFlip>
	)
}

export default Card;
