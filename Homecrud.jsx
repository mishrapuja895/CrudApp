import React from 'react'
import style from "./home.module.css"
import {Link} from "react-router-dom";
export const Homecrud = () => {
  return (
   <section id={style.nav}>
      <li><Link to="/createuser">CREATE-USERS</Link></li>
      <li><Link to="/users">USERS</Link></li>
   </section>
  )
}
