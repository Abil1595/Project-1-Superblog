import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import X1 from './Superblog/Layout';
import Y1 from './Superblog/Homepage';   
import Z1 from './Superblog/Home';  
export default function App()                                            
{                                                                
  return (       
    <BrowserRouter>                            
    <Routes>                                   
     <Route path='/' element={<X1/>}>                                                  
    <Route path='homepage' element={<Y1/>}/>      
    <Route index element={<Z1/>}/>                                  
    </Route>   
    </Routes>                                   
    </BrowserRouter>                           
  ); 
} 