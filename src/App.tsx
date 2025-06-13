// import { useState } from 'react'

// import './App.css'
import './TTT.css'
import TTT from './TTT';

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

// const products = [
//   { title: 'Cabbage', id: 1 },
//   { title: 'Garlic', id: 2 },
//   { title: 'Apple', id: 3 },
// ];

// const listItems = products.map(product =>
//   <li key={product.id}>{product.title}</li>
// );

// function MyButton({ count, onClick }) {
//   return (
//     <button onClick={onClick}>Clicked {count} times</button>
//   );
// }

function App() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   };

  return (
    <div>
      {/* <img src={user.imageUrl} style={{ width: user.imageSize }}></img>
      <h1>Welcome to my app, {user.name}</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} /> */}
      <TTT />
    </div>
  );
}

export default App
