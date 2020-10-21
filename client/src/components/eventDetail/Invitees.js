import React, { useState } from 'react';
import styled from 'styled-components';
import Typography from '../atoms/typography/Typography';

const Invitees = () => {
	const images = [
		'https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg',
		'https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg',
		'https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg',
		'https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg',
		'https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg',
		'https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg'
	];

	const StyledInviteesContainer = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		margin-right: 25%;
	`;

	const StyledImage = styled.img`
		width: 80%;
		border: 2px solid grey;
	`;

	return (
		<StyledInviteesContainer>
			{images.map((image, index) => (
				<div>
					<StyledImage
						key={index}
						src={image}
						alt="img"
						style={Image}
					/>
					<Typography text="Anu" />
				</div>
			))}
		</StyledInviteesContainer>

	)
}
export default Invitees;