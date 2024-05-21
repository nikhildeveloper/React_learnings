// import { useState, useEffect } from "react";


// function useCurrency(currency){
// //     const [data, setData] = useState({})

// //     useEffect(()=>{
// //         fetch(`http://localhost:3001/${currency}`)
// //         .then((res)=>res.json())                            // dont forget to convert to json
// //         .then((res)=>setData(res[currency]))
// //     },[currency])
// //     console.log(data)
// //     return data;
// // }
// const [data, setData] = useState({});
// useEffect(() => {
//   fetch(`http://localhost:3001/${currency}`)
//   .then((res) => res.json())
//   .then((res) => setData(res))
// }, [currency])

// console.log(data);
// return data


// }



// export default useCurrency;

import { useState, useEffect } from "react";

function useCurrency(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/${currency}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    };

    fetchCurrencyData();
  }, [currency]);

  return data;
}

export default useCurrency;

