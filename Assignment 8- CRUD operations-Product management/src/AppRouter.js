import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import App from './App'
import AddProduct from './AddProduct'
import Update from './Update'


function AppRouter(){
    return(
        <BrowserRouter>
        
        <Routes>
            <Route path = '/' element={<App/>}/>
            <Route path = '/AddProduct' element={<AddProduct/>} />
            <Route path="/Update/:productID" element={<Update />} />

        </Routes>
        </BrowserRouter>
    )
}
export default AppRouter