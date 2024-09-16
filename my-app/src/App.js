import React from "react"
import "./App.css"
import Navbar from "./common/Navbar/Navbar"
import Home from "./component/pages/Home"
import About from "./component/About/About"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Gallery from "./component/gallery/Gallery"
import Destionations from "./component/Destinations/Home"
import SinglePage from "./SinglePage/SinglePage"
import Blog from "./component/Blog/Blog"
import BlogSingle from "./component/Blog/blog-single-page/BlogSingle"
import Testimonail from "./component/Testimonail/Testimonail"
import Contact from "./component/Contact/Contact"
import Login from "./component/login/Login"
import Register from "./component/login/Register"
import Footer from "./common/footer/Footer"



function App ()  {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/destination' exact component={Destionations} />
          <Route path='/singlepage/:id' exact component={SinglePage} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/blogsingle/:id' exact component={BlogSingle} />
          <Route path='/testimonail' exact component={Testimonail} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/sign-in' exact component={Login} />
          <Route path='/register' exact component={Register} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
