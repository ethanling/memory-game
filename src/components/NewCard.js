import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components';

const StyledFront = styled.div`
	width: 200px;
`;

const Front = ({title, link}) => (
	<div>
		{//<img height="10%" width="10%" src={link} alt={title} />
		}
		front
	</div>
)

const Back = () => (
	<div style={{backgroundColor: "red", height: "100px", width: '100px' }}></div>
)

const Card = ({title, link}) => {
	const [isFlipped, setFlipped] = useState(false);
	const toggleFlip = () => setFlipped(prevState => !prevState);

	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >
			<Front title={title} link={link} onClick={toggleFlip} />	
			<Back onClick={toggleFlip} />
		</ReactCardFlip>
	)
}

export default Card;
