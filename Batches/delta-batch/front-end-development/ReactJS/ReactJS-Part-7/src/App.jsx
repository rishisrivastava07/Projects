// import './App.css'
import Button from '@mui/material/Button';

function App() {
  let handleClick = () => {
    console.log("button was clicked");
  }
  return (
    <>
     {/* <h1>Material UI Demo</h1> */}
     <Button variant="contained" onClick={handleClick}>Text</Button>
     <Button variant="contained" disabled onClick={handleClick}>Text</Button>
    </>
  )
}

export default App
