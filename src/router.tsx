import { BrowserRouter, Route } from 'react-router-dom'
import FormStep1 from './pages/FormStep1/index'
import FormStep2 from './pages/FormStep2/index'
import FormStep3 from './pages/FormStep3/index'


export const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={FormStep1}/>
      <Route path="/step2" component={FormStep2}/>
      <Route path="/step3" component={FormStep3}/>
    </BrowserRouter>
  )
}