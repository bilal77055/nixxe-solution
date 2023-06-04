

// import React, { useRef } from 'react';

// const Error = ({setIsError}) => {
//   const first = useRef(null);

//   const handleClick = () => {
//     // first.current.classList.add('errornew');
//     setIsError(false)
//     console.log('check');
//   };

//   return (
//     <div
//       className='error11 w-100 d-flex justify-content-center align-items-center'
//       onClick={handleClick}
//       ref={first}
//     >
//       <h1>Response failed due to low speed</h1>
//     </div>
//   );
// };

// export default Error;

import React from 'react';

const Error = ({ setIsError }) => {

  const handleClick = () => {
    setIsError(()=>false);
    console.log('check');
  };

  return (
    <div
      className='error11 w-100 d-flex justify-content-center align-items-center'
      onClick={handleClick}
    >
      <h1>Response failed due to low speed</h1>
    </div>
  );
};

export default Error;

