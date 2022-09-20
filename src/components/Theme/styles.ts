import styled from 'styled-components'

export const Container = styled.div``;
export const Area = styled.section``;
export const Steps = styled.div`
  display:flex;
  min-height: 100vh;


  @media (max-width:768px){
  flex-direction:column;
  gap:20px;
}
`;
export const Sidebar = styled.div`
  width:30%;

@media (max-width:768px){
  width:100%;
}
`;
export const Page = styled.div`
  border-left:1px solid;
  width: 70%;

  @media (max-width:768px){
  width:100%;
  border-top:1px solid;
  border-left:0;
}
`;

