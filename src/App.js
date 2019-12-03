import React from 'react';
import Board from './components/Board';
import styled from 'styled-components';


function App() {

	const StyledApp = styled.div`
		height: 100vh;
		width: 100vw;
		background-color: #f1f1f1;
		display: flex;
		justify-content: center;
		align-items: center;
	`;

	return (
		<StyledApp>
			<Board />
		</StyledApp>
	);
}

export default App;
