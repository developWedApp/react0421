import React, {Component} from 'react';
import Beverage from './Beverage';
/**
 * [
 *  {
 *      id:1,
 *      url:"/cham.jpg",
 *      name:"참이슬",
 *      price:7000,
 *  },
 *  {
 *      id:2,
 *      url:"/bear.jpg",
 *      name:"맥주",
 *      price:10000,
 *  }
 * 
 * 
 * 
 * ]
 * 
 * 
 */
class BeverageList extends Component {
    static defaultProps ={
        list:[]
    }
    render(){

        const view = this.props.list.map((item,index)=>{
            const {id, url, name, price} = item;
            return <Beverage key={id} id={id} url={url} name={name} price={price}/>
        });
        return(
            <div>
                {view}

            </div>

        );

    }

}

export default BeverageList;