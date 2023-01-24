import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';

import { dimensions } from '../../constants';

export const Title = styled.div`
  align-items: center;
`;

export const CardTop = styled.div`
    align-items: center;
`;

export const CardMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const CardContainer = styled(Paper)`
  height: 100%;
  width: 90%;
  max-width: 90%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(dimensions.XL)}px;
  justify-content: space-between;
  .MuiFormControl-root {
    margin-top: ${({ theme }) => theme.spacing(dimensions.XS)}px;
  }
  ${CardBottom} {
    margin-top: ${({ theme }) => theme.spacing(dimensions.M)}px;
    .MuiButtonBase-root:nth-child(2) {
      margin-top: ${({ theme }) => theme.spacing(dimensions.XXS)}px;
    }
  }
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)}px;
`;