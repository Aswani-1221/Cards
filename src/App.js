import logo from './logo.svg';
import './App.css';
import Sdata from './components/Sdata';
import Cards from './components/Cards';


function ncard(val,index,arr){
  return(
    <Cards
  imgsrc={val.imgsrc}
  title={val.title}
  sname={val.sname}
/>

  )
}

function App() {
  return (
  <>
    {Sdata.map(ncard)}
  </>
  );
}

export default App;
