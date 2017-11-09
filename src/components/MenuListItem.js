import { connect } from 'react-redux';
import * as actions from '../actions';

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { imageSize, colors, FONTSIZE_M, FONTSIZE_S, iconSize, menuSize, buttonSize, 
	mediumButtonSize } from '../config/styles';
import Icon from 'react-native-vector-icons/Feather';

var _ = require('lodash');


class MenuListItem extends Component {

	

  state = {
  	count: this.props.item.quantity,
  }

  decrement = () => {
     if(this.state.count !== 1){
     	this.setState({
            count: this.state.count-1
        }, () => {
             const item = this.props.item;
		     var uniqueName = item.name;  
		     item.quantity = this.state.count
		     
		     const newItem = {
		     	[uniqueName]: item
		     }
		     this.props.addToCart(newItem);	
        });
     }
     else{
     	this.setState({
            count: this.state.count-1
        }, () => {
           const item = this.props.item;
	       var uniqueName = item.name;  
	       item.quantity = this.state.count
		     
			const newItem = {
			    [uniqueName]: item
			}
	     	this.props.removeFromCart(newItem);	
	    });
    }
  }		

  
  increment = () => {
    this.setState({
            count: this.state.count+1
        }, () => {
             const item = this.props.item;
		     var uniqueName = item.name;  
		     item.quantity = this.state.count
		     
		     const newItem = {
		     	[uniqueName]: item
		     }
		     this.props.addToCart(newItem);	
        });  
  }	

  render() {
    const { main, container, middleContainer, lastContainer, thinLine, headerLabel, subHeaderLbl } = styles;
    const { name,price,tax, imgPath } = this.props.item;
    console.log(this.props)
    return(
  		<View style={main}>

  			<View style={container}>
	  			
	  			<View style={{justifyContent:'center',padding:15}}>
	  				<Image source={{uri: imgPath}} style={[imageSize]} />
	  			</View>
	  			
	  			<View style={middleContainer}>
	  				<Text style={headerLabel}> {name} </Text>
	                <Text style={subHeaderLbl}>	PRICE: {price} </Text>
	                <Text style={subHeaderLbl}>	TAX:{tax}  </Text>
	  			</View>

	  			<View style={lastContainer}>
	  				<Icon.Button name="minus-circle" backgroundColor="transparent" onPress={this.decrement} />
	  				<Text style={{ fontWeight: 'bold' }}> {this.state.count} </Text>
	  				<Icon.Button name="plus-circle" backgroundColor="transparent" onPress={this.increment}/>
	  			</View>


  			</View>
  			<View style={thinLine} />
  			
  		</View>
    );
  };
}

const styles = {
	main: {
		marginBottom:5, 
		backgroundColor: '#ddd',
		alignItems:'center', 
		justifyContent:'center', 
		height: 150
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	middleContainer:{
		flex: 1,
		justifyContent:'center',
		paddingLeft: 5,
		paddingRight: 5,
	},
	lastContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent:'center',
	},
	thinLine:{
		height: 0.6,
		backgroundColor: '#000',
	},
	headerLabel: {
		fontSize: 16,
	},
	subHeaderLbl: {
		fontSize: FONTSIZE_S
	},
}


const mapstateToProps = ({home}) => {
  const { data, error, loading } = home;
  return { data, error, loading };
}

export default connect(mapstateToProps, actions)(MenuListItem);
// export default MenuListItem;