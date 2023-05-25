// import React from "react";
// import { Container, Row} from "reactstrap";
// import { NavLink, Link } from "react-router-dom";
// import logo from "../../assets/images/logo.png";
// import "./header.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "remixicon/fonts/remixicon.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'reactstrap';
// const nav_links = [
//   {
//     path: "/home",
//     display: "Home",
//   },
//   {
//     path: "/about",
//     display: "About",
//   },
//   {
//     path: "/tours",
//     display: "Tours",
//   },
// ];

// const Header = () => {
//   return (
//     <header className="header">
//       <Container>
//         <Row>
//           <div className="nav_wrapper d-flex align-items-center justify-content-between">
//             {/*===============logo=============*/}
//             <div className="logo">
//               <img src={logo} alt="logo" />
//             </div>
//             {/*===============logo end=============*/}
//             {/*===============menu start=============*/}
//             <div className="navigation">
//               <ul className="menu d-flex align-items-center gap-5">
//                 {nav_links.map((item, index) => (
//                   <li className="nav_item" key={index}>
//                     <NavLink
//                       to={item.path}
//                       className={(navClass) =>
//                         navClass.isActive ? "active_link" : ""
//                       }
//                     >
//                       {item.display}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             {/*===============menu end=============*/}

//             <div className="nav_right d-flex align-items-center gap-4">
//               <div className="nav_btns d-flex align-items-center gap-4">
//                 <Button color="link">
//                   <Link to="/login">LOGIN</Link>
//                 </Button>
//                 <Button color="warning">
//                   <Link to="/register">REGISTERS</Link>
//                 </Button>
//                 <span className="mobile_menu">
//                 <i className="ri-menu-line"></i>
//               </span>
//               </div>

//             </div>
//           </div>
//         </Row>
//       </Container>
//     </header>
//   );
// };

// export default Header;

import React, { useRef, useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const nav_links = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/tours',
    display: 'Tours',
  },
];

const Header = () => {
  const header_ref = useRef(null);
  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        header_ref.current.classList.add('sticky_header');
      } else {
        header_ref.current.classList.remove('sticky_header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener('scroll', stickyHeaderFunc);
  });

  return (
    <header className='header' ref={header_ref}>
      <Container>
        <Row>
          <div className='nav_wrapper d-flex align-items-center justify-content-between'>
            {/*===============logo=============*/}
            <div className='logo'>
              <img src={logo} alt='logo' />
            </div>
            {/*===============logo end=============*/}
            {/*===============menu start=============*/}
            <div className='navigation'>
              <ul className='menu d-flex align-items-center gap-5'>
                {nav_links.map((item, index) => (
                  <li className='nav_item' key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'active_link' : ''
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/*===============menu end=============*/}

            <div className='nav_right d-flex align-items-center gap-4'>
              <div className='nav_btns d-flex align-items-center gap-4'>
                <Button className='login_button' color='link'>
                  <Link to='/login'>LOGIN</Link>
                </Button>
                <Button className='register_button' color='warning'>
                  <Link to='/register'>REGISTER</Link>
                </Button>
                <span className='mobile_menu'>
                  <i class='ri-menu-line'></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
