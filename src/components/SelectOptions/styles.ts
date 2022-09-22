import styled from "styled-components";

export const Container = styled.div<{ selected: boolean;}>`
  padding:10px 5px;
  display:flex;
  align-items:center;
  gap:10px;
  border:2px solid ${props => props.selected ? '#25cd89' : '#16195c' };
  border-radius:4px;
  margin:20px 5px;
  cursor:pointer;
  transition: .3s ease-in-out;

  &:hover{
    transition: .3s ease-in-out;
    box-shadow:0 0px 1px 2px #000;
  }
`;

export const Icon = styled.span`
  width:66px;
  height:66px;
  background-color:#0000ff12;
  border-radius:100%;
  font-size:30px;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const Info = styled.div``;
export const Title = styled.h4``;
export const Description = styled.span`

`;