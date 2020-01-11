import React from 'react';
import styled from 'styled-components';
import { Box, Grid } from '@material-ui/core';

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
