import React from 'react';
import './App.css';
// import Connect from './components/Connect/Connect';
// import Event from './components/Event/Event';
// import Gallery1 from './components/Gallery1/Gallery1';
// import Gallery2 from './components/Gallery2/Gallery2';
// import Header from './components/Header/Header';
// import Navigation from './components/Navigation/Navigation';
// import Video from './components/Video/Video';
// import Footer from "./components/Footer/Footer";
import image1 from './1.jpg';
import image2 from './bg1.jpg';
import image3 from './3.jpg';
import image4 from './bg2.jpg';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      name1:'',
      name2:'',
    }
  }

  changeName=(name,val)=>{
// console.log(val)
    if(name==='name1'){
      this.setState({
        name1:val
      })
    }
    if(name==='name2'){
      this.setState({
        name2:val
      })
    }
  }

  validate=()=>{
    // console.log('background change')
    let random = Math.floor((Math.random() * 4) + 1);
    if(random===1){ document.body.style.backgroundImage=`url(${image1})`;}
    if(random===2){ document.body.style.backgroundImage=`url(${image2})`;}
    if(random===3){ document.body.style.backgroundImage=`url(${image3})`;}
    if(random===4){ document.body.style.backgroundImage=`url(${image4})`;}

    const{name1,name2}=this.state;
    if(name1.length===0 || name2.length===0)
    {
        alert("Please enter names")
        return false;
    }
    else if(name1.toLowerCase().startsWith('rash') && name2.toLowerCase().startsWith('shubh'))
    {
      document.getElementById('result').innerHTML='100%';
    }
    else if(name2.toLowerCase().startsWith('rash') && name1.toLowerCase().startsWith('shubh'))
    {
      document.getElementById('result').innerHTML='100%';
    }
    else if(name1.toLowerCase().startsWith('pooja') && name2.toLowerCase().startsWith('shubh'))
    {
      document.getElementById('result').innerHTML='100%';
    }
    else if(name2.toLowerCase().startsWith('pooja') && name1.toLowerCase().startsWith('shubh'))
    {
      document.getElementById('result').innerHTML='100%';
    }
    else {
      var x = Math.floor((Math.random() * 100) + 1);
      document.getElementById('result').innerHTML=x+"%";
    }
  }

render(){
  const{name1,name2}=this.state;

  return (
    <div className="App">
      <h1>Friendship Bond</h1>
      <div className="container">
        <input id="name1" type="text" value={name1} onChange={(e)=>this.changeName('name1',e.target.value)} />
        <div className="plus">+</div>
        <input id="name2" type="text" value={name2} onChange={(e)=>this.changeName('name2',e.target.value)}/>
        <button className="submit" onClick={this.validate} >Submit</button>
        <div id="result"></div>
      </div>
    </div>
  );
}
}

export default App;
