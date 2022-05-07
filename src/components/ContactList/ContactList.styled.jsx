import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: auto;
  margin-left: 40px;
`;
/*  
  margin-right: auto;  margin-left: auto;
  margin-right: auto;*/
export const Item = styled.li`
  width: 480px;
  height: 50px;
  margin: 0;
  border: 0;
  margin-bottom: 10px;

  border-radius: 3px;
  background-image: linear-gradient(
    to top,
    #e8aef0 10%,
    #f4f76d 30%,
    #d977e6 50%,
    #f4f76d 70%,
    #e8aef0
  );
  display: flex;
  justify-content: start;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  transition: all 400ms cubic-bezier(0.4, 0, 0.3, 1);
  &:hover {
    box-shadow: 5px 4px 5px 1px rgba(100, 100, 100, 0.7);
  }
`;
/* background-color: #3e1268; */
export const Text = styled.p`
  margin-right: 10px;
  color: #550c5f;
  font-size: 18px;
  font-weight: 600;
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const ChangeColor = styled.span`
  color: #550c5f;
  transition: color 400ms cubic-bezier(0.4, 0, 0.3, 1);
  &:hover {
    color: #ffffff70;
  }
`;

/* export const Image = styled.img`
  display: block;
  width: 740px;
  height: 500px;
  object-fit: cover;
  position: absolute;
  top: 100px;
  right: 55px;
`;
 */
