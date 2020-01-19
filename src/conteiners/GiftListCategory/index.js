import React, { useEffect, useMemo } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from 'react-slick';
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  CardContent,
} from '@material-ui/core';
import { Circulo, BoxStyled, BoxSlider } from './styles';
import * as GiftListAction from '../../store/modules/giftList/actions';
import { useDispatch, useSelector } from 'react-redux';
import history from '../../services/history';
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

const GiftListCategory = props => {
  const classes = useStyles();
  const giftList = useSelector(state => state.giftList);

  const { collection } = giftList;

  const dispatch = useDispatch();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 0,
    initialSlide: 0,
    vertical: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    dispatch(
      GiftListAction.getGiftListByCategory(props.match.params.categoryId)
    );
  }, []);

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
            {(collection || []).map(card => (
              <div key={card.id}>
                <Card className={classes.card}>
                  <CardActionArea
                    onClick={() => history.push(`/gift-list/${card.id}`)}
                  >
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

export default GiftListCategory;
