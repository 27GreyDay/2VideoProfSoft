import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./screens/home/home"
import CarDetail from "./screens/car-detail/CarDetail"

const Router = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home />} path='/'/>
            <Route element={<CarDetail />} path='/car/:id'/>
            <Route path='*' element={<dev>Not found</dev>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default Router