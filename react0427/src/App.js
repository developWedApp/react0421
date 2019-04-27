import React, {Component} from 'react';
import Beverage from './component/Beverage';
import BeverageList from './component/BeverageList'
import Payment from './component/Payment'
class App extends Component {
  state = {
    payment:0,
    list : [
        {
          id:1,
          url:"cham.jpg",
          name:"참이슬",
          price:"5000"
        },
        {
          id:2,
          url:"bear.JPG",
          name:"맥주",
          price:"7000"
        }, 
        {
          id:3,
          url:"coca.png",
          name:"콜라",
          price:"4000"
        },
        {
          id:4,
          url:"cider.jpg",
          name:"사이다",
          price:"4000"
        }


    ]
  }

  onReset = () => {
    
  }
  render (){
    const {list, payment} = this.state;
    return(
       <div style={{display:"flex"}}>
         
         <BeverageList list={list}/>
         <div style={{width:300, backgroundColor:"crimson", height:200}}>
            <Payment payment={0} onClick={this.onReset} />
         </div>
      </div>

    );
  }
}

export default App;
