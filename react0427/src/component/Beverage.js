import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class Beverage extends Component{
    static defaultProps = {
        id:0,
        url:"",
        name:"",
        price:0
    }



    render(){

        const {url, name, price} = this.props;

        return(
            
            <Card >
                <CardActionArea>
                    <img src={url}/>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {price}
                    </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
            
      );
    }
}

export default Beverage;