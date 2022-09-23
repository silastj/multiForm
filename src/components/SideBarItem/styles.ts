import styled from "styled-components";

export const Container = styled.div`
  flex:1;
  margin:5px auto 5px auto;
  border-bottom:1px solid;

  a{
    display: flex;
    align-items: center;
    margin:5px;
    gap: 30px;
    cursor: pointer;
    text-decoration:none;
    color:#000;
  }
`;

export const Title = styled.h4`
  font-size:18x;
  font-weight:bold;
  color:#000;
`;

export const Header = styled.div`
  height:50px;
`;

export const Description = styled.div`
`;

export const Icon = styled.div`
`;

export const Footer = styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-end;
  flex:1;
`;

export const State = styled.div<{active: boolean;}>`
  width:10px;
  height:10px;
  border-radius:100%;
  margin-left: 5px;
  background-color: ${props => props.active ? 'greenyellow' : 'transparent'};
  border:2px solid ${props => props.active ? 'greenyellow' : 'gray'};
`;