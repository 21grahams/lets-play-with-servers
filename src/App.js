import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import jquery, { data } from 'jquery';
const $ = require('jquery');

function App() {


  const getRequest = () => {
   
    console.log('lets make a get request')
  }

  return (
    <div className="App">
      <header className="App-header">
        Hit the button to Serve me up a string!
        <button onClick={() => getRequest()}>Click me</button>
      </header>
      
    </div>
  );
}

export default App;


//get request code

  //  $.ajax({
  //   url: 'http://localhost:4000/',
  //   dataType: 'text',
  //   success: (res) => {
  //     console.log(res)
  //   },
  // });


//   axios.get('http://localhost:4000/')
//   .then(res => console.log(res.data))
//   .catch(err => console.log(err))
