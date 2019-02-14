import React from 'react';
import LeftArrow from './assets/LeftArrow';
import RightArrow from './assets/RightArrow';

function PatreonCreators(){
  return(
    <div className="wrapper">
    <style jsx>{`
    .wrapper{
      display: flex;
      justify-content: center;
    }
    #button{
      display: flex;
      position: relative;
      top: 60px;
      justify-content:center;

    }
  .arrowbuttons{
    height:54px;
    width:54px;
  }
  `}
    </style>
      <div>
        <h3>Meet some Patreon creators</h3>
      </div>

      <div id="button">
      <button className="arrowbuttons">
          <LeftArrow />
       </button>
        <div>
        <button className="arrowbuttons">
          <RightArrow />
        </button>
        </div>
      </div>

    </div>
  );
}
export default PatreonCreators;
