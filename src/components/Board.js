import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import images from '../images/index.js';
import ScoreBoard from './ScoreBoard';
import Card from './NewCard';

const Board = () => {
	const StyledBoard = styled.div`
		display: grid;
		grid-template-columns: 1fr 1fr;
	`;

    const [deck, setDeck] = useState([]);

	// Duplicates inital set of cards so that each card has a matching counterpart
	const duplicateImages = (arr) => {
		return arr.concat(arr);
	}

	// Durstenfield Shuffle alogorithm for randomizing deck 
	function shuffleCards(arr) {
		let copy = arr;
		for (let i = copy.length - 1; i > 0; i--) {
	        const j = Math.floor(Math.random() * (i + 1));
	        [copy[i], copy[j]] = [copy[j], copy[i]];			    
		}
		return copy;
	}	

	useEffect(() => {
		const unshuffledDeck = duplicateImages(images);
		const shuffledDeck = shuffleCards(unshuffledDeck);
		setDeck(shuffledDeck)		
	}, []);

	return (
		<StyledBoard>
            <ScoreBoard />
			{deck.map((image, i) => (
				<Card 
					key={i} 
					link={image.link} 
                    title={image.title}
				/>
			))}	
		</StyledBoard>
	)
}

export default Board;
