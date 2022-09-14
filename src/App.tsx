import { Router } from './router'
import './App.css';
import { FormProvider } from './contexts/FormContext'

function App() {
  return (
    <FormProvider>
      <Router/>
   </FormProvider>
  );
}

export default App;
