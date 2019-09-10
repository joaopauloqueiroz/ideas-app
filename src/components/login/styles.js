import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  align-self: stretch;
`;

export const Image = styled.Image`
  width: 100%;
`;

export const Input = styled.TextInput`
  min-width: 250px;
  padding: 2px;
  border: none;
  margin-bottom: 10px;
  opacity: 0.9;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  max-width: 250px;
  padding: 4px;
  border-radius: 15px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  background-color: ${props => (props.bgColor ? props.bgColor : '#000')};
`;
export const TextButton = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;

export const Logo = styled.Text`
  font-family: Arial;
  color: #000;
  font-weight: bold;
  text-align: center;
  padding-bottom: 15px;
  margin-bottom: 10px;
  font-size: 25px;
`;
export const Error = styled.Text`
  min-width: 250px;
  margin-top: 10px;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 2px;
  text-align: center;
  font-size: 10px;
`;

export const Text = styled.Text`
  text-align: left;
  font-family: ' Roboto, sans-serif';
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const TextOr = styled.Text`
  text-align: left;
  font-family: ' Roboto, sans-serif';
  /* margin-left: 13px; */
  margin: 13px;
  /* margin-bottom: 13px; */
  font-weight: bold;
`;

export const Description = styled.Text`
  text-align: left;
  font-family: ' Roboto, sans-serif';
  margin-left: 20px;
`;
