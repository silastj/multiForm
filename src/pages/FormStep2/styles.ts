import styled from 'styled-components'

export const Container = styled.div`
  

p{
  font-size:16px;
  color: #000555;
  font-weight:bold;
  padding:10px 0 10px 5px;
}

h1{
  margin:0;
  padding:10px 0 10px 5px;
  font-size:26px;
}

hr{
  border:1px solid;
}

label{
  font-size:13px;
  padding:5px 0 5px 5px;

  input{
    margin-top:7px;
    display:block;
    box-sizing:border-box;
    width:99%;
    padding:20px 10px;  
    outline:0;
    margin:0 auto;
    border-radius:4px;
    cursor: pointer;

    &:hover{
    transition: .3s ease-in-out;
    box-shadow:0 0px 1px 2px #000;
  }
  }
}

button{
  border:none;
  padding:10px 20px;
  margin-left:5px;
  text-transform:uppercase;
  cursor: pointer;
  border-radius:4px;
  transition: .3s ease-in-out;
  border:1px solid .9;
  margin-top: 20px;
  
  &:hover{
    background-color:transparent;
    transition: .3s ease-in-out;
    box-shadow:0 0px 1px 2px #000;
  }
}
`;