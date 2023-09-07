 
import './App.css';
import  data from './data';
import Tours from './components/Tours';
 import { useState } from 'react';
 
function App() {
  const [tours, setTours] = useState(data);
  function removetour(id){
    const newTours =tours.filter(tours=>tours.id !==id);
    setTours(newTours);
  }console.log(tours)
  return(
<>
<div className="container"> 
<Tours tours ={tours} removetour={removetour}></Tours>
</div>
</>
  );
   
  
}

export default App;
