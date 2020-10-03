import React from "react";
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Grid, Card, Input } from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

const Slider = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const CardSection = styled.div`
	display: flex;
	> div {
		margin-right:8px;
		width: 25%;
	}
	div:last-of-type {
		margin-right: 0;
	}
`;

const Home = () => {
	const classes = useStyles();

	const cardLayout = (
		<Card>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						R
          </Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title="Royal Basketball"
				subheader="September 13, 2020"
			/>
			<CardMedia
				className={classes.media}
				image="https://material-ui.com/static/images/cards/paella.jpg"
				title="Paella dish"
			/>
		</Card>
	);

	return (
		<Grid>
			<Slider>
				<img src="../../static/images/home-club.jpg" alt="FNC home banner" />
				<Typography>Slider</Typography>
				<Grid>
					<Typography>Filters: </Typography>
					<Input placeholder="Activity Name"></Input>
					<Input placeholder="Location"></Input>
				</Grid>
			</Slider>
			<CardSection>
				{cardLayout}
				{cardLayout}
				{cardLayout}
				{cardLayout}
			</CardSection>
		</Grid>
	);
};

export default Home;