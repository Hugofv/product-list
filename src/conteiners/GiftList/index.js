import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from 'react-slick';
import {
  Grid,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  CardContent,
} from '@material-ui/core';
import {
  Circulo,
  BoxStyled,
  CardCarousel,
  BoxSlider,
  BoxDetail,
  TitleList,
} from './styles';
import * as GiftListAction from '../../store/modules/giftList/actions';
import { useDispatch, useSelector } from 'react-redux';
import randomNumber from '../../utils/randomNumber';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

const GiftList = props => {
  const classes = useStyles();
  const giftList = useSelector(state => state.giftList);

  const { item } = giftList;

  const dispatch = useDispatch();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    dispatch(GiftListAction.getGiftListById(props.match.params.id));
  }, []);

  console.log(giftList);
  return (
    <>
      <BoxStyled container justify="space-around" alignItems="center">
        <Grid item xs={4}>
          <Circulo>1º</Circulo>
          <div>
            <Typography variant="h5">Tipo da Lista</Typography>
            <Typography>Selecione sua lista de acordo com o evento</Typography>
          </div>
        </Grid>

        <Grid item xs={4}>
          <Circulo>2º</Circulo>
          <div>
            <Typography variant="h5">Customize</Typography>
            <Typography>Personalize sua lista</Typography>
          </div>
        </Grid>
      </BoxStyled>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <BoxSlider>
          <Slider {...settings}>
            {(item.products || []).map(card => (
              <div key={card.id}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={
                        card.image
                          ? card.image
                          : 'https://resultadosdigitais.com.br/blog/files/2016/12/publicar-listas-no-blog.jpg'
                      }
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.name}
                      </Typography>
                      {/*
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>*/}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </Slider>
        </BoxSlider>
      </div>
    </>
  );
};

export default GiftList;
