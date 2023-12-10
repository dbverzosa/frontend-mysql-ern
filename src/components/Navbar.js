import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import admin from '../admin.png'
import { useDispatch, useSelector } from 'react-redux'
import { LogOut, reset } from '../features/authSlice'


const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
       <nav class="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
         <div class="navbar-brand">
            
           <NavLink to='/dashboard' class="navbar-item">
             <img src={admin} width="112" height="28" alt='logo'/>
           </NavLink>
       
           <a href='!#' role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
             <span aria-hidden="true"></span>
             <span aria-hidden="true"></span>
             <span aria-hidden="true"></span>
           </a>
         </div>
       
         <div id="navbarBasicExample" class="navbar-menu">
           
           <div class="navbar-end">
             <div class="navbar-item">
               <div class="buttons">
                 <button onClick={logout} class="button is-light">
                   Log out
                 </button>
               </div>
             </div>
           </div>
         </div>
       </nav>
    </div>
  )
}

export default Navbar









// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
//         <nav class="navbar" role="navigation" aria-label="main navigation">
//           <div class="navbar-brand">
//             <a class="navbar-item" href="https://bulma.io">
//               <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
//             </a>
        
//             <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
//               <span aria-hidden="true"></span>
//               <span aria-hidden="true"></span>
//               <span aria-hidden="true"></span>
//             </a>
//           </div>
        
//           <div id="navbarBasicExample" class="navbar-menu">
//             <div class="navbar-start">
//               <a class="navbar-item">
//                 Home
//               </a>
        
//               <a class="navbar-item">
//                 Documentation
//               </a>
//             </div>
        
//             <div class="navbar-end">
//               <div class="navbar-item">
//                 <div class="buttons">
//                   <a class="button is-primary">
//                     <strong>Buy a Car</strong>
//                   </a>
//                   <div class="navbar-item has-dropdown is-hoverable">
//                   <a class="button is-light">
//                     Log in as
//                   </a>
        
//                 <div class="navbar-dropdown">
//                   <a class="navbar-item">
//                     Dealer
//                   </a>
//                   <a class="navbar-item">
//                     Manufacturer
//                   </a>
//                   <a class="navbar-item">
//                     Supplier
//                   </a>
//                   <hr class="navbar-divider"/>
//                   <a class="navbar-item">
//                     Sign up
//                   </a>
//                 </div>
//               </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//     </div>
//   )
// }

// export default Navbar