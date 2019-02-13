import React from 'react';


function VideoBox() {
  return(
    <div className='wrapper'>

      <style jsx>{`

      .wrapper {
        display: grid;
        background: lightgreen;
        height: 549px;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 30px;

        grid-template-rows: auto auto;

        font-family: America, sans-serif;
      }

      #heading {
        position: relative;
        top: 68px;
        font-size: 41px;
        color: white;
        width: 600px;
        grid-column: 1 / 3;
        text-align: center;
        justify-self: center;
        align-self: center;
      }

      #button-1 {
        justify-self: end;
        background: rgb(231, 236, 240);
        color: rgb(28, 64, 89);
        height: 55px;
        width: 205px;
      }

      #button-2 {
        justify-self: start;
        background: rgb(250, 118, 100);
        color: white;
        height: 55px;
        width: 177px;
      }


      #button-2:hover {
        background: rgba(250, 118, 100, 0.9);
      }

      #button-1:hover {
        background: rgba(231, 236, 240, 0.9);
      }

      button {
        padding-left: 24px;
        padding-right: 24px;
        font-size: 16px;

      }

    `}
      </style>

      <h1 id='heading'>Patreon powers membership businesses for creators</h1>
      <button id='button-1'>WHAT IS PATREON?</button>
      <button id='button-2'>START MY PAGE</button>

    </div>

  );
}

export default VideoBox;
