import React, { useEffect } from 'react'

const FunctionBased = () => {
    const [count, setCount]= React.useState(0);

    const handleClick = ()=>{
        setCount(count+1);
    }
    useEffect(()=>{
        console.log("useEffect is called");
    },[]);
    console.log("this is nirdesh");
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Count : {count}</p>
    </div>
  )
}

export default FunctionBased
