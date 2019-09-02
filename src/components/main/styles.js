import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ddd;
  padding: 10px;
  align-self: stretch;
  align-items: center;
`;

export const Text = styled.Text`
    color: #000;
    font-weight: bold;
    font-size: 20;
    text-align: center;
    font-family: 'Roboto, sans-serif';
    margin-top: 5px;
`;

export const Description = styled.Text `
    font-size: 12px;
    color: #000;
    font-family: 'Roboto, sans-serif';
    width: 70%;
`

export const GridItem = styled.View `
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    margin-top: 5px;
    margin-bottom: 8px;
    padding: 5px;
    flex-direction: row;
`;
export const ViewIcon = styled.View`
    justify-content: flex-end;
    padding-left: 5px;
    align-items: flex-end;
    flex-direction: row;
`;
export const ViewItems = styled.View`
    width: 30%;
    justify-content: flex-end;
    flex-direction: column;
`;

export const Button = styled.TouchableOpacity `
    height: 30px;
    border-radius: 4px;
    background-color: #cecece;
    min-width: 100px;
    padding: 4px;
    margin-top: 10px;
`
export const TextButton = styled.Text `
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
`
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

export const Scroll = styled.ScrollView `
     padding: 8px;
     margin-bottom: 10px;
     height: auto;
`
export const DateItem = styled.Text `
    font-size: 10px;
    color: #000;
    padding-right: 4px;
    text-align: right;
    font-family: 'Roboto, sans-serif';
    
`