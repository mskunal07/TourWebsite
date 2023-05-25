// import React from 'react'
// import './Search-bar.css';
// import {Col, Form, FormGroup} from "reactstrap";

// const SearchBar = () => {
//   return (
//     <Col lg="12">
//       <div className='search_bar'>
//         <Form className='d-flex aligne-items-center gap-4'>
//           <FormGroup className='d-flex gap-3 form_group form_group-fast'>
//             <span>
//               <i class="ri-map-pin-line"></i></span>
//               <div>
//                 <h6>Location</h6>
//                 <input type='text' placeholder='Where are you going ? '/>
//               </div>
//           </FormGroup>

//           <FormGroup className='d-flex gap-3 form_group form_group-fast'>
//             <span>
//               <i class="ri-map-pin-time-line"></i></span>
//               <div>
//                 <h6>Distance</h6>
//                 <input type='number' placeholder='Distance k/m '/>
//               </div>
//           </FormGroup>

//           <FormGroup className='d-flex gap-3 form_group form_group-last'>
//             <span>
//               <i class="ri-group-line"></i></span>
//               <div>
//                 <h6>Max People</h6>
//                 <input type='number' placeholder='0'/>
//               </div>
//           </FormGroup>
//         </Form>
//       </div>
//     </Col>
//   )
// }

// export default SearchBar


// import React from 'react';
// import './Search-bar.css';
// import { Col, Form, FormGroup } from 'reactstrap';
// import { RiMapPinLine, RiMapPinTimeLine, RiGroupLine, } from 'react-icons/ri';

// const SearchBar = () => {
//   return (
//     <Col lg="12">
//       <div className="search-bar">
//         <Form className="d-flex align-items-center gap-4">
//           <FormGroup className="d-flex gap-3 form-group form-group-fast">
//             <span><RiMapPinLine /></span>
//             <div>
//               <h6>Location</h6>
//               <input type="text" placeholder="Where are you going?" />
//             </div>
//           </FormGroup>

//           <FormGroup className="d-flex gap-3 form-group form-group-fast">
//             <span><RiMapPinTimeLine /></span>
//             <div>
//               <h6>Distance</h6>
//               <input type="number" placeholder="Distance (km)" />
//             </div>
//           </FormGroup>

//           <FormGroup className="d-flex gap-3 form-group form-group-last">
//             <span><RiGroupLine /></span>
//             <div>
//               <h6>Max People</h6>
//               <input type="number" placeholder="0" />
//             </div>
//           </FormGroup>
//           <span className='search-icon' type="submit">
//             <i class="ri-search-line"></i>
//           </span>
//         </Form>
//       </div>
//     </Col>
//   );
// };

// export default SearchBar;

// import React,{useRef} from 'react';
// import './Search-bar.css';
// import { Col, Form, FormGroup } from 'reactstrap';
// import { RiMapPinLine, RiMapPinTimeLine, RiGroupLine, RiSearchLine } from 'react-icons/ri';

// const loactionRef = useRef('')
// const distanceRef = useRef(0)
// const maxGroupSizeRef = useRef(0)

// const searchHandler = () => {
//   const location = loactionRef.current.value;
//   const distance = distanceRef.current.value;

//   const maxGroupSize = maxGroupSizeRef.current.value;


// if(location==='' || distance=== '' || maxGroupSize=== ''){
//   return alert('all fields are required');  
// }


// }

// const SearchBar = () => {

  
//   return (
//     <Col lg="12">
//       <div className="search-bar">
//         <Form className="d-flex align-items-center gap-4">
//           <FormGroup className="d-flex gap-3 form-group form-group-fast">
//             <span><RiMapPinLine /></span>
//             <div>
//               <h6>Location</h6>
//               <input type="text" placeholder="Where are you going?" ref={loactionRef}/>
//             </div>
//           </FormGroup>

//           <FormGroup className="d-flex gap-3 form-group form-group-fast">
//             <span><RiMapPinTimeLine /></span>
//             <div>
//               <h6>Distance</h6>
//               <input type="number" placeholder="Distance (km)" ref={distanceRef}/>
//             </div>
//           </FormGroup>

//           <FormGroup className="d-flex gap-3 form-group form-group-last" ref={maxGroupSizeRef}>
//             <span><RiGroupLine /></span>
//             <div>
//               <h6>Max People</h6>
//               <input type="number" placeholder="0" />
//             </div>
//           </FormGroup>

//           <span className='search-icon' type="submit" onClick={searchHandler}>
//             <RiSearchLine/>
//           </span>
//         </Form>
//       </div>
//     </Col>
//   );
// };

// export default SearchBar;

import React,{useRef} from 'react';
import './Search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';
import { RiMapPinLine, RiMapPinTimeLine, RiGroupLine, RiSearchLine } from 'react-icons/ri';

const SearchBar = () => {
  const loactionRef = useRef('')
  const distanceRef = useRef(0)
  const maxGroupSizeRef = useRef(0)

  const searchHandler = () => {
    const location = loactionRef.current.value;
    const distance = distanceRef.current.value;

    const maxGroupSize = maxGroupSizeRef.current.value;

    if(location==='' || distance=== '' || maxGroupSize=== ''){
      return alert('all fields are required');  
    }
  }

  return (
    <Col lg="12">
      <div className="search-bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form-group form-group-fast">
            <span><RiMapPinLine /></span>
            <div>
              <h6>Location</h6>
              <input type="text" placeholder="Where are you going?" ref={loactionRef}/>
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form-group form-group-fast">
            <span><RiMapPinTimeLine /></span>
            <div>
              <h6>Distance</h6>
              <input type="number" placeholder="Distance (km)" ref={distanceRef}/>
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form-group form-group-last" ref={maxGroupSizeRef}>
            <span><RiGroupLine /></span>
            <div>
              <h6>Max People</h6>
              <input type="number" placeholder="0" />
            </div>
          </FormGroup>

          <span className='search-icon' type="submit" onClick={searchHandler}>
            <RiSearchLine/>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
