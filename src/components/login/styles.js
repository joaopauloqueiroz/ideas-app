import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #dddd;
  justify-content: center;
  align-items: center;
  padding: 30px;
  align-self: stretch;

`;

export const Image = styled.Image `
    width: 100%;
`;

export const Input = styled.TextInput `
    border-color: #ddd;
    border-radius: 4px;
    background-color: #fff;
    border-width: 1px;
    height: 35px;
    padding: 5px;
    font-size: 16px;
    font-weight: normal;
    font-family: 'Roboto, sans-serif';
    text-align: center;
    min-width: 250px;
    margin-top: 10px;
`;

export const Button = styled.TouchableOpacity `
    border-radius: 4px;
    background-color: #cecece;
    min-width: 80px;
    padding: 8px;
    margin-top: 10px;
`
export const TextButton = styled.Text `
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
`

export const Logo = styled.Text `
    color: #DF4723;
    font-weight: bold;
    font-size: 28px;
    font-family: 'din-condensed, sans-serif';
    
`
export const Error = styled.Text `
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
`