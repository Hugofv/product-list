import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from 'react-slick';
import { Grid } from '@material-ui/core';
import { Circulo, BoxStyled, CardCarousel } from './styles';
import * as GiftListAction from '../../store/modules/giftList/actions';
import { useDispatch, useSelector } from 'react-redux';
import randomNumber from '../../utils/randomNumber';

const Product = () => {
  const giftList = useSelector(state => state.giftList);

  const { collection } = giftList;

  const dispatch = useDispatch();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const backgounds = [
    'linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%);',
    'linear-gradient(90deg, #1CB5E0 0%, #000851 100%);',
    'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%);',
    'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%);',
    'linear-gradient(90deg, #FDBB2D 0%, #3A1C71 100%);',
    'linear-gradient(90deg, #d53369 0%, #daae51 100%);',
    'linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);',
  ];

  useEffect(() => {
    dispatch(GiftListAction.getGiftList());
  }, []);

  return (
    <>
      <BoxStyled
        container
        spacing={2}
        justify="space-around"
        alignItems="center"
      >
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

      <div>
        <Slider {...settings}>
          <div>
            <CardCarousel
              background={backgounds[randomNumber(0, backgounds.length - 1)]}
            >
              1
            </CardCarousel>
          </div>
          <div>
            <CardCarousel
              background={backgounds[randomNumber(0, backgounds.length - 1)]}
            >
              2
            </CardCarousel>
          </div>
          <div>
            <CardCarousel
              background={backgounds[randomNumber(0, backgounds.length - 1)]}
            >
              3
            </CardCarousel>
          </div>
          <div>
            <CardCarousel
              background={backgounds[randomNumber(0, backgounds.length - 1)]}
            >
              4
            </CardCarousel>
          </div>
          <div>
            <CardCarousel
              background={backgounds[randomNumber(0, backgounds.length - 1)]}
            >
              5
            </CardCarousel>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Product;
