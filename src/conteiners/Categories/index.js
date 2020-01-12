import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from 'react-slick';
import { Grid, Button } from '@material-ui/core';
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
import history from '../../services/history';

const Categories = () => {
  const giftList = useSelector(state => state.giftList);

  const { categories } = giftList;

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
    dispatch(GiftListAction.getCategories());
  }, []);

  console.log(categories);
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
            {(categories || []).map(card => (
              <div key={card.id}>
                <CardCarousel
                  background={
                    backgounds[randomNumber(0, backgounds.length - 1)]
                  }
                >
                  {card.name}
                </CardCarousel>

                <BoxDetail>
                  <TitleList>{card.quantityList} Listas</TitleList>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      history.push(`gift-list-category/${card.id}`)
                    }
                  >
                    Ver Lista(s)
                  </Button>
                </BoxDetail>
              </div>
            ))}
          </Slider>
        </BoxSlider>
      </div>
    </>
  );
};

export default Categories;
