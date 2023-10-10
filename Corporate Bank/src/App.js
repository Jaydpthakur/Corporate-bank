import React from 'react'
import "./Style.css"
import Layout from './Layout'

import { BrowserRouter, Form, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import About from './About'
import Vlog from './Vlog'

import Login from './Login'
import Coustmerdash from './Coustmerdash'
import Contact from './Contact'
import Accountinfo from './Costomer/Accountinfo'
import WithdralMoney from './Costomer/WithdralMoney'
import Changepassword from './Costomer/Changepassword'
import Submitmoney from './Costomer/Submitmoney'
import Checkblance from './Costomer/Checkblance'
import MiniStatements from './Costomer/MiniStatements'
import Team from './Team'
import CosHome from './Costomer/CosHome'





function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='service' element={<Services />} />
            <Route path='contact' element={<Contact />} />
            <Route path='about' element={<About />} />
            <Route path='vlog' element={<Vlog />} />

            <Route path='team' element={<Team />} />
            <Route path='/login' element={<Login />} />
            <Route path='/coustomerdash/' element={<Coustmerdash />}>
              <Route index element={<CosHome />} />
              <Route path='accountinfo' element={<Accountinfo />} />
              <Route path='mini' element={<MiniStatements />} />
              <Route path='withdralmoney' element={<WithdralMoney />} />
              <Route path='changepass' element={<Changepassword />} />
              <Route path='submitmoney' element={<Submitmoney />} />
              <Route path='checkblance' element={<Checkblance />} />



            </Route>

          </Route>
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
