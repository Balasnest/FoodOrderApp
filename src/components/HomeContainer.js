import { connect } from 'react-redux';
import * as actions from '../actions';

import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Image, Button, FlatList, Dimensions, TouchableOpacity } from 'react-native'

export const { width, height } = Dimensions.get('window');

const data = [
  {id:1, name: 'Burgers'},
  {id:2, name: 'Sandwiches'},
  {id:3, name: 'Drinks'},
  {id:4, name: 'Snacks'},
];

class HomeContainer extends React.Component {

  static displayName = 'HomeContainer';

  constructor(){
    super();
    this.menuList = this.menuList.bind(this);
  }

  static propTypes = {
    // data: PropTypes.array.isRequired,
    navigation: PropTypes.object.isRequired
  };

  menuList(){
    const navigation = this.props.navigation;
    this.props.menulist({ navigation });
  };

  renderItem = ({item}) => {
    return(
      <TouchableOpacity onPress={this.menuList}>
        <View style={styles.rowStyle}>
          <Text style={{color: 'white', fontSize: 16 }}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }


  render() {
    const { container, categories } = styles;

    return (
      <View style={container}>
        <View>
          <FlatList
            style={{flex:1, width: width}}
            data={data}
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
    backgroundColor: 'orange'
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
  }
});

const mapstateToProps = ({home}) => {
  const { data, error, loading } = home;
  return { data, error, loading };
}

export default connect(mapstateToProps, actions)(HomeContainer);