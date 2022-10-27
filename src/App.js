import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
// import { SocketContext } from './context/service';


function App() {
  const [products,setProducts] =useState([]);
  console.log(products,'Im products')
  // const socket = useContext(SocketContext);
  const symbols = products.map(item => item.symbol);
  // console.log(symbols,"Im symbolsss")
  // socket.emit("response", {name: "v2/ticker", symbols,function (response) {
  //   console.log('emit response', response.MARK_PRICE);
// }});
  // const getPrice = async (() => {
    
  // },[])
  // const ws = new WebSocket("wss://production-esocket.delta.exchange/");
  // const apiCall = {
  //   event: "v2/ticker",
  //   data: { name: "v2/ticker",symbols },
  // };
  // ws.onopen = (event) => {
  //   ws.send(JSON.stringify(apiCall));
  // };
  // ws.onmessage = function (event) {
  //   const json = JSON.parse(event.data);
  //   console.log(json,"IM JSON DATA")
  //   try {
  //     if ((json.event = "data")) {
  //       setPrice(json.data);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const client = new WebSocket("wss://production-esocket.delta.exchange/");
  const apiCall = {
    name: "v2/ticker",
    sumbols:symbols,
};
client.onopen = (event) => {
  client.send(apiCall);
};



  const [price,setPrice] = useState([])
  console.log(price,"im price")

  useEffect(()=>{
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://api.delta.exchange/v2/products');
        setProducts(res.data.result)

        client.onmessage = function (event) {
          const json = JSON.parse(event.data);
          setPrice(json.mark_price)
          console.log(`[message] Data received from server: ${json}`);
          
          
          };
  
      // return () => {
      //     client.close()
      // }
         

      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts();
  },[])
  
  return (
    <div className="App">
      <Header />
      <Home products={products} />
    </div>
  );
}

export default App;
