import { connect } from 'react-redux';
import * as actions from '../actions';


import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Image, Button, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import MenuListItem from './MenuListItem';
import Icon from 'react-native-vector-icons/Feather';

export const { width, height } = Dimensions.get('window');

var _ = require('lodash');


class MenuListContainer extends React.Component {

  // static navigationOptions = {
  //   header: ({ navigate }) => ({
  //         right: (    
  //           <TouchableOpacity onPress={() => {navigate('Notification')} } >
  //             <Icon.Button name={'shopping-cart'} size={26} />
  //           </TouchableOpacity>
  //         ),
  //   }),
  // };

  static displayName = 'MenuListContainer';

  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  static propTypes = {
    // data: PropTypes.array.isRequired,
    navigation: PropTypes.object.isRequired
  };

  componentWillMount(){
      mergeInto = this.props.data
      toMerge = this.props.cartData
      var mergeData = _.merge({}, mergeInto, toMerge)

      var result =  Object.keys(mergeData).map(function(key) { return mergeData[key] });
      console.log(result)

      this.setState({
        data: result
      })
  }


  renderItem = ({item}) => {
    return <MenuListItem item={item} />

    {/* 
        // if(this.props.cartData){
    //   this.props.cartData.forEach(function(obj) {
    //     if (obj[name] == item.name) {
    //       return 
    //     }
        
    //   });
    // }
    // else return <MenuListItem item={item} />
     */}
  }


  render() {
    const { container, categories } = styles;

    return (
      <View style={container}>
        <View>
          <FlatList
            style={{flex:1, width: width}}
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  categories:{
    width: 200,
    height: 200,
    borderRadius: 4,
    backgroundColor: 'white'
  },
  rowStyle:{
    flex: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd'
  }
});

const mapstateToProps = ({home}) => {
  const { data, cartData, loading } = home;
  return { data, cartData, loading };
}

export default connect(mapstateToProps, actions)(MenuListContainer);