import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  padding: 10px ${p => p.theme.space[4]}px;
  margin: 20px auto;

  @media screen and (min-width: 320px) {
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px ${p => p.theme.space[5]}px;
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1280px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  row-gap: ${p => p.theme.space[5]}px;
  @media screen and (min-width: 320px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    gap: ${p => p.theme.space[5]}px;
  }
  @media screen and (min-width: 1200px) {
    column-gap: ${p => p.theme.space[3]}px;
  }
`;

export const Title = styled.h2`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.primary};
  padding: ${p => p.theme.space[5]}px 0;
  text-align: center;
`;

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.lg};
  transition: ${p => p.theme.transition.transform},
    ${p => p.theme.transition.boxShadow};
  &:hover,
  &:focus {
    transform: scale(1.03);
    box-shadow: ${p => p.theme.shadows.cardHover};
  }
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - ${p => p.theme.space[4]}px) / 3);
  }
  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - ${p => p.theme.space[4]}px * 2) / 4);
  }
`;

export const Img = styled.img`
  margin-bottom: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.lg};
  @media screen and (min-width: 320px) {
    height: 398px;
  }
  @media screen and (min-width: 768px) {
    height: 455px;
  }
  @media screen and (min-width: 1200px) {
    height: 550px;
  }
`;

export const ImgTitle = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.33;
  color: ${p => p.theme.colors.orangered};
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  @include mq(desktop) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
