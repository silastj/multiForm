import styled from "styled-components";

export const Container = styled.div`
  border:1px solid;
  width:50%;
  margin:0 auto 5px auto;

  a{
    display: flex;
    align-items: center;
    margin:5px;
    gap: 30px;
    cursor: pointer;
  }
`;
export const Title = styled.h4`
  font-size:18x;
  font-weight:bold;
`;
export const Header = styled.div`
  width:50%;
  height:50px;
`;
export const Description = styled.div`
`;
export const Icon = styled.div`
`;
export const Footer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:50%;
`;
export const State = styled.div<{path: string;}>`
  width:10px;
  height:10px;
  border-radius:100%;
  background-color: ${props => props.path ? 'greenyellow' : 'red'};
`;