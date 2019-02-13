import React from 'react';
import PatreonLogo from './assets/patreonLogo';

function NavBar() {
  return (
    <div className='wrapper'>
      <style jsx>{`
      .wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        font-family: America, sans-serif;
        height: 48px;
      }

      .wrapper p:hover {
        color: red;
      }

      #navLogo {
        align-self: start;
        color: #042c49;
      }

      #navButtonGroup {
        position: relative;
        display: grid;
        grid-template-columns: repeat(5, auto);

      }
      #search {
        text-align: center;
        height: 30px;
      }
    `}

      </style>

      <div id='navLogo'>
        <PatreonLogo/>
      </div>

      <div id='navButtonGroup'>
        <input id="search" type='text' placeholder='Find a creator'></input>
        <p>Start My Page</p>
        <p>Explore Creators</p>
        <p>Sign Up</p>
        <p>Log In</p>
      </div>

    </div>



  );
}

export default NavBar;
