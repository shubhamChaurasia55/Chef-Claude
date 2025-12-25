import {logo} from './assets/react.svg'

function navBar(){
  return (
    <div className="nav-bar">
      <img src={logo} alt="" width="150"/>
    </div>
  )
}




function App() {
  return (
    <>
      <navBar />
    </>
  )
}

export default App
