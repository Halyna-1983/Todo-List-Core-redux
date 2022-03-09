import React from "react";
import { AppContainer } from "./StyledComponent/AppContainer.style";
import { Header } from "./StyledComponent/Header.style";
import InputField from "./Components/InputField";
import List from "./Components/List";

// import { Button } from '../src/StyledComponent/Button.style';
// import { Input } from '../src/StyledComponent/Input.style';

function App() {
  return (
    <AppContainer>
      <Header>Todo List</Header>
      <List />
    </AppContainer>
  );
}

export default App;
