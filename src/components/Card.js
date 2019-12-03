import React from 'react';
import styled from 'styled-components';


const Card = ({ link, title }) => {
	const StyledCard = styled.div`
		display: flex;
		justify-content: center;
		height: 200px;
	`;

	const StyledImg = styled.img`
		width: 200px;
	`;
	

	return (
		<StyledCard>
			<StyledImg src={link} alt={title} />
		</StyledCard>
	)
}

export default Card;
