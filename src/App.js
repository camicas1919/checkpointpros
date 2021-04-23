import './App.css';
import Compent from './profile/profile';
import moi from './img/moi.jpg'
function App() {
  const handelName = (name) => alert(name);
  
  return (
   <>
    <Compent
    fullName={"Hamza Youssef"}
    bio={"yrtegh"} 
    profession={"ergrtyhrz"}
    handelName = {handelName}
    >
      <img id="img" src={moi} alt="img"></img>
    </Compent>
    </>
  );
}

export default App;