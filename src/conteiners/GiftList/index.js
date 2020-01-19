import React, { useEffect, useMemo, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  Container,
  TextField,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from '@material-ui/core';
import {
  BackgroundBack,
  NameProduct,
  CardContentStyled,
  AvatarStyled,
  CardDetail,
  CancelIcon,
  BoxIconCancel,
} from './styles';
import * as GiftListAction from '../../store/modules/giftList/actions';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { Search } from '@material-ui/icons';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import history from '../../services/history';

const useStyles = makeStyles({
  card: {
    maxWidth: '12em',
  },
});

const GiftList = props => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [open, setOpen] = useState(false);
  const [nameList, setNameList] = useState('');

  const giftList = useSelector(state => state.giftList);

  const { item, loading, success } = giftList;

  const dispatch = useDispatch();

  const removeProduct = index => {
    let list = _.cloneDeepWith(products);
    _.remove(list, (currentObject, i) => {
      return i === index;
    });
    setProducts(list);
  };

  const saveList = () => {
    const list = {
      id: Math.floor(Math.random() * 1000),
      categoryId: item.categoryId,
      image: item.image,
      name: nameList,
      products,
    };

    if (nameList) {
      dispatch(GiftListAction.saveGiftList(list));
    }
  };

  const openModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(GiftListAction.getGiftListById(props.match.params.id));
  }, []);

  useEffect(() => {
    setProducts(item.products);
  }, [item.products]);

  useEffect(() => {
    setProductsFiltered(products);
  }, [products]);

  useEffect(() => {
    if (!loading && success) {
      history.push(`/gift-list/${item.id}`);
      window.location.reload();
    }
  }, [loading, success]);

  const quantityProducts = useMemo(() => products && products.length, [
    products,
  ]);

  const priceTotal = useMemo(
    () =>
      products &&
      products.reduce(
        (accumulator, current) => (accumulator += current.price),
        0
      ),
    [products]
  );

  const filterItens = event => {
    const regex = new RegExp(event.target.value, 'gi');
    const lists = products.filter(
      product => regex.test(product.name) || regex.test(product.price)
    );
    setProductsFiltered(lists);
  };

  return (
    <>
      <Container style={{ background: '#fff' }}>
        <CardDetail>
          <BackgroundBack url={item.image} />

          <AvatarStyled alt="Remy Sharp" src={item.image} />
          <CardContentStyled>
            <Button variant="contained" color="secondary" onClick={openModal}>
              Quero esta lista!
            </Button>

            <Typography variant="h5" color="textPrimary" component="p">
              {item.name}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              {quantityProducts} itens com o total de R${' '}
              {(priceTotal || 0).toLocaleString('pt-BR')}
            </Typography>
          </CardContentStyled>
        </CardDetail>
      </Container>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        aria-labelledby="form-gift-list"
      >
        <DialogTitle id="form-gift-list">Nova Lista</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            margin="dense"
            label="Nome da Lista"
            type="text"
            onChange={event => setNameList(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Cancelar
          </Button>
          <Button onClick={saveList} variant="contained" color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>

      <Container style={{ background: '#fff', paddingTop: '2em' }}>
        <TextField
          fullWidth
          label="Busque por nome ou preço"
          variant="outlined"
          onChange={event => filterItens(event)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />

        <TransitionGroup className="list-transition">
          {(productsFiltered || []).map(({ id, name, price, image }, index) => (
            <CSSTransition key={id} timeout={500} classNames="item-transition">
              <div>
                <Card className={classes.card}>
                  <BoxIconCancel container justify="flex-end">
                    <div>
                      <CancelIcon onClick={() => removeProduct(index)} />
                    </div>
                  </BoxIconCancel>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={
                        image
                          ? image
                          : 'https://resultadosdigitais.com.br/blog/files/2016/12/publicar-listas-no-blog.jpg'
                      }
                      title="Contemplative Reptile"
                    />
                    <CardContentStyled>
                      <NameProduct variant="body1" component="h2">
                        {name}
                      </NameProduct>
                      <span>1 unidade</span>
                      <span>R$ {price.toLocaleString('pt-BR')}</span>
                    </CardContentStyled>
                  </CardActionArea>
                </Card>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
        {
          // <TransitionGroup>
          //   {(productsFiltered || []).map((card, index) => (
          //     <CSSTransition
          //       key={card.id}
          //       timeout={500}
          //       classNames="item-transition"
          //     >
          //       <Card className={classes.card}>
          //         <BoxIconCancel container justify="flex-end">
          //           <div>
          //             <CancelIcon onClick={() => removeProduct(index)} />
          //           </div>
          //         </BoxIconCancel>
          //         <CardActionArea>
          //           <CardMedia
          //             component="img"
          //             alt="Contemplative Reptile"
          //             height="140"
          //             image={
          //               card.image
          //                 ? card.image
          //                 : 'https://resultadosdigitais.com.br/blog/files/2016/12/publicar-listas-no-blog.jpg'
          //             }
          //             title="Contemplative Reptile"
          //           />
          //           <CardContentStyled>
          //             <NameProduct variant="body1" component="h2">
          //               {card.name}
          //             </NameProduct>
          //             <span>1 unidade</span>
          //             <span>R$ {card.price.toLocaleString('pt-BR')}</span>
          //           </CardContentStyled>
          //         </CardActionArea>
          //       </Card>
          //     </CSSTransition>
          //   ))}
          // </TransitionGroup>
        }
      </Container>
    </>
  );
};

export default GiftList;
