import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#fff"
    },
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
        [theme.breakpoints.down("sm")]: {
            height: 300,
            fontSize: "3em"
        }
    },
    blogsContainer: {
        paddingTop: theme.spacing(3)
    },
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3)
    },
    card: {
        maxWidth: "100%",
    },
    media: {
        height: 240
    },
    cardActions: {
        display: "flex",
        margin: "0 10px",
        justifyContent: "space-between"
    },
    author: {
        display: "flex"
    },
    paginationContainer: {
        display: "flex",
        justifyContent: "center"
    }
}));
function Cards() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                {/* 24.04.21 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Link to='/pages240421'>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        React useContext
                  </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                  </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardActions}>
                                <Box className={classes.author}>
                                    <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            Guy Clemons
                    </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                            May 14, 2020
                    </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <BookmarkBorderIcon />
                                </Box>
                            </CardActions>
                        </Card>
                    </Link>
                </Grid>
                {/* 25.04.21 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Link to='/pages250421'>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        React useContext
                  </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                  </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardActions}>
                                <Box className={classes.author}>
                                    <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            Guy Clemons
                    </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                            May 14, 2020
                    </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <BookmarkBorderIcon />
                                </Box>
                            </CardActions>
                        </Card>
                    </Link>
                </Grid>
            </Grid>


        </div>
    )
}

export default Cards
