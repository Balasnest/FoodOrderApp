import { connect } from 'react-redux';
import * as actions from '../actions';


import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Image, Button, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import MenuListItem from './MenuListItem';

export const { width, height } = Dimensions.get('window');

class MenuListContainer extends React.Component {

  static displayName = 'MenuListContainer';

  constructor(){
    super();
  }

  static propTypes = {
    // data: PropTypes.array.isRequired,
    navigation: PropTypes.object.isRequired
  };


  renderItem = ({item}) => {
    return(
        <MenuListItem item={item} />
    );
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