import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;
/*  justify-content: center; */
export const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  margin-top: 40px;
  border: 0;
  margin-left: 40px;
  margin-right: 90px;
  padding: 20px 40px;
  border-radius: 5px;
  background-image: linear-gradient(
    to top,
    #e8aef0 10%,
    #f4f76d 30%,
    #d977e6 50%,
    #f4f76d 70%,
    #e8aef0
  );
`;
/* background-image: linear-gradient(
    to top,
    #e8aef0 10%,
    #ffffff 30%,
    #d977e6 50%,
    #ffffff 70%,
    #e8aef0
  ); */
export const Label = styled.label`
  display: inline-flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  color: #3e1268;
  font-size: 20px;
  font-weight: 500;
  border: 0;
`;

export const Input = styled.input`
  width: 400px;
  height: 40px;
  outline: none;
  border: 0;
  margin-bottom: 20px;
  padding: 10px 20px;
  font-size: 20px;
`;
/*  border: 0;
  border-bottom: 1px solid #000; */
export const InputBottom = styled(Input)`
  margin-bottom: 40px;
`;
export const Image = styled.img`
  display: block;
  width: 200px;
  height: 300px;
  margin-top: 40px;
`;

/* export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 170px;
  height: 40px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  border: 0;
  color: #011b27;
  background-color: #fff;
  &:hover {
    color: #fff;
    background-color: #264d5f;
    box-shadow: 1px 2px 1px #011b27, 3px 5px 4px #264d5f;
    transition: all 400ms cubic-bezier(0.4, 0, 0.3, 1);
  }
`; */
