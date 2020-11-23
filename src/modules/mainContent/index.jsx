import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import feature1 from "../../assets/bg/feature1.jpg";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import BathtubIcon from "@material-ui/icons/Bathtub";
import SingleBedIcon from "@material-ui/icons/SingleBed";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import SpaceBarIcon from "@material-ui/icons/SpaceBar";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Button from "@material-ui/core/Button";

import feature2 from "../../assets/bg/feature2.jpg";
import feature3 from "../../assets/bg/feature3.jpg";
import feature4 from "../../assets/bg/feature4.jpg";
import feature5 from "../../assets/bg/feature5.jpg";
import feature6 from "../../assets/bg/feature6.jpg";

import Slider from "react-animated-slider";
import './style.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    additionalInfo: {
        padding: '0 4%',
    },
});


// Slide content
const content = [
    {
        title: 'Perfect Home for me',
        description:
            "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
        button: "Read More",
        user: "Luan Gjokaj",
    },
    {
        title: 'Perfect Home for me',
        description:
            "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
        button: "Read More",
        user: "Luan Gjokaj",
    },
    {
        title: 'Perfect Home for me',
        description:
            "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
        button: "Read More",
        user: "Luan Gjokaj",
    },
];

const MainContent = () => {
    const classes = useStyles();

    return (
      <div className='main-content'>
          <div className='main-title'>
              <h2>Featured Properties</h2>
              <p>You can contact us at any time
                  <br/>You get the best quality
                  <br/>Enjoy shopping</p>
          </div>

          <div className='cards'>
              <Card className={classes.root}>
                  <CardActionArea>
                      <CardMedia
                          className={classes.media}
                          image={feature1}
                          title="Villa in Los Angeles"
                      />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                              Villa in Los Angeles
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                              Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.
                          </Typography>
                      </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.additionalInfo}>
                      <BathtubIcon/>
                      2
                      <SingleBedIcon/>
                      2
                      <AddLocationIcon/>
                      <SpaceBarIcon/>
                      120 sq m.
                      <LocalOfferIcon/>
                      875 000$
                  </CardActions>
                  <CardActions>
                      <Button size="small" color="primary">
                          Share
                      </Button>
                      <Button size="small" color="primary">
                          Learn More
                      </Button>
                  </CardActions>
              </Card>

              <Card className={classes.root}>
                  <CardActionArea>
                      <CardMedia
                          className={classes.media}
                          image={feature2}
                          title="Villa in Los Angeles"
                      />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                              Town House in Los Angeles
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                              Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.
                          </Typography>
                      </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.additionalInfo}>
                      <BathtubIcon></BathtubIcon>
                      2
                      <SingleBedIcon></SingleBedIcon>
                      2
                      <AddLocationIcon></AddLocationIcon>
                      <SpaceBarIcon/>
                      120 sq m.
                      <LocalOfferIcon/>
                      575 000$
                  </CardActions>
                  <CardActions>
                      <Button size="small" color="primary">
                          Share
                      </Button>
                      <Button size="small" color="primary">
                          Learn More
                      </Button>
                  </CardActions>
              </Card>

              <Card className={classes.root}>
                  <CardActionArea>
                      <CardMedia
                          className={classes.media}
                          image={feature3}
                          title="Villa in Los Angeles"
                      />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                              Town House in Los Angeles
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                              Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.
                          </Typography>
                      </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.additionalInfo}>
                      <BathtubIcon></BathtubIcon>
                      2
                      <SingleBedIcon></SingleBedIcon>
                      2
                      <AddLocationIcon></AddLocationIcon>
                      <SpaceBarIcon/>
                      120 sq m.
                      <LocalOfferIcon/>
                      775 000$
                  </CardActions>
                  <CardActions>
                      <Button size="small" color="primary">
                          Share
                      </Button>
                      <Button size="small" color="primary">
                          Learn More
                      </Button>
                  </CardActions>
              </Card>

              <Card className={classes.root}>
                  <CardActionArea>
                      <CardMedia
                          className={classes.media}
                          image={feature4}
                          title="Villa in Los Angeles"
                      />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                              Villa in Los Angeles
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                              Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.
                          </Typography>
                      </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.additionalInfo}>
                      <BathtubIcon></BathtubIcon>
                      2
                      <SingleBedIcon></SingleBedIcon>
                      2
                      <AddLocationIcon></AddLocationIcon>
                      <SpaceBarIcon/>
                      120 sq m.
                      <LocalOfferIcon/>
                      300 000$
                  </CardActions>
                  <CardActions>
                      <Button size="small" color="primary">
                          Share
                      </Button>
                      <Button size="small" color="primary">
                          Learn More
                      </Button>
                  </CardActions>
              </Card>

              <Card className={classes.root}>
                  <CardActionArea>
                      <CardMedia
                          className={classes.media}
                          image={feature5}
                          title="Villa in Los Angeles"
                      />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                              Villa in Los Angeles
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                              Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.
                          </Typography>
                      </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.additionalInfo}>
                      <BathtubIcon></BathtubIcon>
                      2
                      <SingleBedIcon></SingleBedIcon>
                      2
                      <AddLocationIcon></AddLocationIcon>
                      <SpaceBarIcon/>
                      120 sq m.
                      <LocalOfferIcon/>
                      80 000$
                  </CardActions>
                  <CardActions>
                      <Button size="small" color="primary">
                          Share
                      </Button>
                      <Button size="small" color="primary">
                          Learn More
                      </Button>
                  </CardActions>
              </Card>

              <Card className={classes.root}>
                  <CardActionArea>
                      <CardMedia
                          className={classes.media}
                          image={feature6}
                          title="Villa in Los Angeles"
                      />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                              Villa in Los Angeles
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                              Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.
                          </Typography>
                      </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.additionalInfo}>
                      <BathtubIcon></BathtubIcon>
                      2
                      <SingleBedIcon></SingleBedIcon>
                      2
                      <AddLocationIcon></AddLocationIcon>
                      <SpaceBarIcon/>
                      120 sq m.
                      <LocalOfferIcon/>
                      385 000$
                  </CardActions>
                  <CardActions>
                      <Button size="small" color="primary">
                          Share
                      </Button>
                      <Button size="small" color="primary">
                          Learn More
                      </Button>
                  </CardActions>
              </Card>
          </div>

          <div className='main-title'>
              <h2>CLIENT TESTIMONIALS</h2>
              <p>
                  Suspendisse dictum enim sit amet libero malesuada feugiat.
              </p>
          </div>

          <Slider className="slider-wrapper">
              {content.map((item, index) => (
                  <div
                      key={index}
                      className="slider-content"
                  >
                      <div className="inner">
                          <h1>{item.title}</h1>
                          <p>{item.description}</p>
                          <button>{item.button}</button>
                      </div>
                      <section>
                          <div className='img'></div>
                          <span>
              Posted by <strong>{item.user}</strong>
            </span>
                      </section>
                  </div>
              ))}
          </Slider>

          <div className='support'>
              <div className='main-title'>
                  <h2>VLADISLAV ENEV</h2>
                  <h4>Realtor</h4>
                  <p>

                      <br/>
                      Etiam nec odio vestibulum est mattis effic iturut magna.
                      Pellentesque sit amet tellus blandit.
                      Etiam nec odiomattis effic iturut magna.
                      Pellentesque sit am et tellus blandit.
                      Etiam nec odio vestibul.
                      Etiam nec odio vestibulum est mat tis effic iturut magna.
                      Curabitur rhoncus auctor eleifend.
                      Fusce venenatis diam urna, eu pharetra arcu varius ac.
                      Etiam cursus turpis lectus, id iaculis risus tempor id.
                      Phasellus fringilla nisl sed sem scelerisque, eget aliquam magna vehicula.
                  </p>

                  <div className='phone'>
                      <PhoneIcon /> +45 677 8993000 223
                  </div>
                  <div className='email'>
                      <EmailIcon /> office@template.com
                  </div>
              </div>

              <div className='businessman'></div>
          </div>
      </div>
    );
}

export default MainContent;