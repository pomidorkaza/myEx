import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Data from '../src/data.json'; 
import img0 from './images/0.jpg';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';
import img7 from './images/7.jpg';
import img8 from './images/8.jpg';
 
import img9 from './images/9.jpg';
 
const flexStyle={  
display:"flex",
justifyContent:"center",
flexDirection:"column"
 };

const Images=[
  img0,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9
];
const Position=[
  ];  
const options=[
  {value:'коллеги',label:'коллеги'},

  {value:' оллег и',label:' оллег и'},
  {value:' оллег и...',label:' оллег и...'}

];
class App extends Component {
    constructor(props){
      super(props);
      this.state={
  MyIndex:['','','','','','','','','',''],
 };
       this.onHandleChange=this.onHandleChange.bind(this);
       this.onLeave=this.onLeave.bind(this);
    }
    onLeave(){
      this.setState({MyIndex:['','','','','','','','','','']});
    }
    onHandleChange(){
     var arr=[];
      for(var i=0;i<Data.length;i++)
    {
      arr[i]=i;
     }
    this.setState({MyIndex:arr});
     }
  render() {
    return (
      <div onMouseOver={this.onHandleChange} onMouseLeave={this.onLeave}  >
     
       <header class="header">Выполнение планов продаж</header>
        <select className="selector">
      {
        options.map((x,i)=>{
       return   <option key={i} label={x.label}>{x.value}</option>
        })
      }
     </select> 
   <div className="flex" >
     {
       Data.sort((x,y)=>{ return x.curValue-y.curValue}).map((item,index)=>{
     return  <div  className={"Sam  maincat"+this.state.MyIndex[index]+" "+"transition"} key={item.id }
       height={"500"} percentAge={item.percantage} >
         
        <h2 style={{...flexStyle}}>
      <div className="img-value">
        <img className="cats" src={Images[index]} width={"80vh"}
         height={"70"}/>
         <div  className="curValue" >{item.curValue}</div>
    </div>
        {item.alias.split(".").join(" ")}</h2>
        <div>{item.percantage}</div>
          </div>   
      })
     }
   </div>
   <div className="Hidden" ></div>

  </div>
     );
   }
}

export default App;
