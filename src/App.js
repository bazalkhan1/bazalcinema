//import React,{ useState } from 'react';
import Loginform from './Login.js';
import './App.css';
import Pic from './Background.js';
const App = ()=> {
  
    //const [switcher,setswitcher] = useState(true);
    //const handleState=()=>{
    // setswitcher(!switcher);
   // }

///if (switcher){
 // return <login stateChanger={handleState}/>;
//}
return(
 
  <div>
    <div style = {{position:'absolute'}}><Loginform /></div>
    <Pic style = {{position : 'relative'}} />
    
    </div>
)
}
export default App;
