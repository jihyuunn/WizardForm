import React, { useRef } from "react";

const LogIn = ({ LoggedIn, nextStep }) => {
  const idRef = useRef();
  const pswRef = useRef();

  return (
    <div>
      <form>
        <input type="text" ref={idRef}></input>
        <input type="password" ref={pswRef} />
        <input type="submit" onClick={e => {
            e.preventDefault();
            LoggedIn(idRef.current.value, pswRef.current.value)
            }} />
      </form>
      <div>
        <button>Prev</button>
        <button
          onClick={() => {
            console.log(idRef.current.value);
            nextStep();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LogIn;
