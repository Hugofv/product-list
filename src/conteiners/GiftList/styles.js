import React from 'react';
import styled from 'styled-components';
import {
  Box,
  Grid,
  Typography,
  CardContent,
  Card,
  Avatar,
} from '@material-ui/core';
import { Cancel } from '@material-ui/icons';

export const BoxStyled = styled(Grid)`
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(0, 0, 0, 0.15) 100%
    ),
    radial-gradient(
        at top center,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(0, 0, 0, 0.4) 120%
      )
      #989898;
  background-blend-mode: multiply, multiply;
  width: 100%;
  height: 7em;
  color: #fff;
`;

export const Circulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  float: left;
  margin: 4px;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.75);
  -moz-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.75);
  box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.75);
`;

export const CardCarousel = styled.div`
  background: ${props => props.background};
  color: #fff;
  font-size: 36px;
  line-height: 100px;
  margin: 10px;
  padding: 2%;
  position: relative;
  text-align: center;
`;

export const BoxProducts = styled(Grid)`
  margin-top: 2em !important;
`;

export const CardContentStyled = styled(CardContent)`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 6.5em;
  justify-content: space-between;
`;

export const NameProduct = styled(Typography)`
  padding: 0 0 1em 0;
  font-weight: bold !important;
  font-size: 0.8rem !important;
`;

export const BackgroundBack = styled.div`
  background-image: linear-gradient(
      rgba(113, 137, 145, 0.6),
      rgba(113, 137, 145, 0.8)
    ),
    url(${props => props.url});
  background-position: center;
  background-size: cover;
  display: flex;
  flex: 1;
  width: 100%;
  min-height: 10em;
  position: relative;
  z-index: 1;
  filter: blur(2px);
`;

export const CardDetail = styled(Card)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const AvatarStyled = styled(Avatar)`
  margin-top: -111px;
  z-index: 2;
  border: #fff solid 7px;
  width: 9em !important;
  height: 9em !important;
`;

export const CancelIcon = styled(Cancel)`
  padding: 0.2em;
  color: #fff;
  cursor: pointer;
  visibility: hidden;
`;

export const BoxIconCancel = styled(Grid)`
  > div {
    width: 40px;
    height: 40px;
    position: absolute;
    z-index: 2;
  }
  :hover {
    > div > svg {
      visibility: visible;
    }
  }
`;
