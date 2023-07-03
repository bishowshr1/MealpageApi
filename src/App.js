import { Route, Routes } from "react-router"
import RootLayOut from "./components/RootLayOut"
import HomePage from "./pages/HomePage"
import Category from "./pages/Category"
import Detail from "./pages/Detail"
import Search from "./pages/Search"
import PageMovie from "./pages/PageMovie"
import MealPage from "./features/MealPage/MealPage"

const App = () => {






  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayOut />}>
          <Route index element={<HomePage />} />
          <Route path="meal/show" element={<MealPage />} />

          <Route path="/movie/:category" element={<Category />} />
          <Route path="/movie/detail/:id" element={<Detail />} />
          <Route path="/searchmovie/:search" element={<Search />} />
          <Route path="/searchpage/:category/:page" element={<PageMovie />} />

        </Route>

      </Routes >

    </>
  )
}

export default App
