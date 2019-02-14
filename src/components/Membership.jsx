import React from 'react';

function Membership(){
  return(
    <div className="wrapper">
      <style jsx>{`
      .wrapper{
        padding-left: 32;
        padding-right: 32;
        display: flex;
        justify-content: center;
      }
      .membership{
        text-align: center;
        max-width: 70%;
        color: rgb(4,44,73);
      }
      `}
      </style>
      <h1 className="membership">Membership allows _________ like you to have a direct relationship with your biggest fans, get recurring revenue for your work, and create on your own terms.</h1>
    </div>
  );
}

export default Membership;
