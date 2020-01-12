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
  Container,
  TextField,
  CardContent,
  Avatar,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  Circulo,
  BoxStyled,
  BackgroundBack,
  BoxProducts,
  NameProduct,
  CardContentStyled,
  AvatarStyled,
  CardDetail,
} from './styles';
import * as GiftListAction from '../../store/modules/giftList/actions';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
  card: {
    maxWidth: '12em',
  },
});

const GiftList = props => {
  const classes = useStyles();
  const giftList = useSelector(state => state.giftList);

  const { item } = giftList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GiftListAction.getGiftListById(props.match.params.id));
  }, []);

  var products = [
    {
      id: 991,
      price: 46.28,
      name: 'Capon - Breast, Double, Wing On',
      image: 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff',
    },
    {
      id: 992,
      price: 34.12,
      name: 'Soup Campbells - Tomato Bisque',
      image: 'http://dummyimage.com/600x600.jpg/dddddd/000000',
    },
    {
      id: 993,
      price: 50.02,
      name: 'Lentils - Green, Dry',
      image: 'http://dummyimage.com/600x600.jpg/cc0000/ffffff',
    },
    {
      id: 994,
      price: 27.09,
      name: 'Tea - Decaf Lipton',
      image: 'http://dummyimage.com/600x600.jpg/cc0000/ffffff',
    },
    {
      id: 995,
      price: 46.82,
      name: 'Soup - Campbells Chili',
      image: 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff',
    },
  ];

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

      <Container>
        <CardDetail>
          <BackgroundBack url={item.image} />

          <AvatarStyled alt="Remy Sharp" src={item.image} />
          <CardContent>
            <Typography variant="h5" color="textPrimary" component="p">
              {item.name}
            </Typography>
          </CardContent>
        </CardDetail>
      </Container>

      <Container>
        <Autocomplete
          style={{ marginTop: '2em' }}
          getOptionLabel={option => option.description}
          filterOptions={x => x}
          options={products}
          autoComplete
          includeInputInList
          freeSolo
          disableOpenOnFocus
          renderInput={params => (
            <TextField
              {...params}
              label="Add a location"
              variant="outlined"
              fullWidth
            />
          )}
          renderOption={option => {
            return (
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={1}>
                  <CardMedia
                    component="img"
                    alt={option.name}
                    height="50"
                    width="50"
                    image={option.image}
                    title={option.name}
                  />
                </Grid>
                <Grid item xs>
                  <span>{option.name}</span>

                  <Typography variant="body2" color="textSecondary">
                    R$ {option.price.toLocaleString('pt-BR')}
                  </Typography>
                </Grid>
              </Grid>
            );
          }}
        />

        <BoxProducts container spacing={2}>
          {(item.products || []).map(card => (
            <Grid key={card.id} item>
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
                  <CardContentStyled>
                    <NameProduct variant="body1" component="h2">
                      {card.name}
                    </NameProduct>

                    <span>1 unidade</span>
                    <span>R$ {card.price.toLocaleString('pt-BR')}</span>
                  </CardContentStyled>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </BoxProducts>
      </Container>
    </>
  );
};

export default GiftList;
