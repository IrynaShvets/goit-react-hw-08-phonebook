import styled from 'styled-components';

export const Wrapper = styled.div`
  background-image: linear-gradient(
    to right,
    #b43bc4 10%,
    #9e1111 30%,
    #f4f76d 50%,
    #9e1111 70%,
    #b43bc4
  );
`; /*#550c5f background-image: linear-gradient(
    to right,
    #5c0505 10%,
    #9e1111 30%,
    #801419 50%,
    #9e1111 70%,
    #5c0505
  ); */
export const Container = styled.div`
  display: flex;

  align-items: center;
`;
/*flex-direction: column; justify-content: center; width: 100%;
  height: auto;  */
export const Image = styled.img`
  border-top-width: 10px;
  border-top-style: dashed;
  border-top-color: #5c0505;
  display: block;
  width: 100%;
  height: 65vh;
  object-fit: cover;
`;

export const CardImage = styled.div`
  position: relative;
  border-bottom-width: 10px;
  border-bottom-style: dashed;
  border-bottom-color: #9e1111;
  margin-bottom: 5px;
`;

export const ImageSubtitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  background: rgba(47, 48, 58, 0.8);
`;
/*   border-bottom: inset 0 0 10px 5px rgba(0, 0, 0, 0.3); */
export const Logo = styled.h1`
  font-family: Raleway, sans-serif;
  color: #100733;
  line-height: 1.19;
  letter-spacing: 0.03em;
  font-size: 44px;
  font-weight: bold;
  border-bottom: 7px solid #5c0505;
`;

export const Subtitle = styled.h3`
  font-family: Raleway, sans-serif;
  color: #5c0505;
  line-height: 1.19;
  letter-spacing: 0.03em;
  font-size: 24px;
  font-weight: bold;
  margin: 0;

  text-align: center;

  font-style: normal;
`;
/* #1d0752 */
export const LogoPhone = styled.span`
  color: #5c0505;
`;
/* Wrapper #9e1111*/
/*  */
