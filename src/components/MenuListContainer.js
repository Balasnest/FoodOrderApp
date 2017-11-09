import { connect } from 'react-redux';
import * as actions from '../actions';


import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Image, Button, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import MenuListItem from './MenuListItem';
import Icon from 'react-native-vector-icons/Feather';


export const { width, height } = Dimensions.get('window');

class MenuListContainer extends React.Component {

  static navigationOptions = {
    header: ({ navigate }) => ({
          right: (    
            <TouchableOpacity onPress={() => {navigate('Notification')} } >
              <Icon.Button name={'shopping-cart'} size={26} />
            </TouchableOpacity>
          ),
    }),
  };

  static displayName = 'MenuListContainer';

  constructor(){
    super();
  }

  static propTypes = {
    // data: PropTypes.array.isRequired,
    navigation: PropTypes.object.isRequired
  };


  renderItem = ({item}) => {

    if(this.props.cartData){
      this.props.cartData.forEach(function(obj) {
        if (obj[name] == item.name) {
          return <MenuListItem item={obj} />
        }
        
      });
    }
    else return <MenuListItem item={item} />
  }


  render() {
    const { container, categories } = styles;

    return (
      <View style={container}>
        <View>
          <FlatList
            style={{flex:1, width: width}}
            data={this.props.navigation.state.params.data}
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

// const mapstateToProps = ({home}) => {
//   const { data, error, loading } = home;
//   return { data, error, loading };
// }

export default MenuListContainer;