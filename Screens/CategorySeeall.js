import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';

const DetailsScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = () => {
    setIsLoading(true);
    axios
      .get(`https://randomuser.me/api/?page=${currentPage}&results=1000`)
      .then(res => {
        //setUsers(res.data.results);
        setUsers([...users, ...res.data.results]);
        setIsLoading(false);
      });
  };

  const renderItem = ({item}) => {
    return (

        <View style={{
            flexDirection: 'row',}}>
            <TouchableOpacity onPress={()=>{navigation.navigate('SubCategory')}} style={{
                borderBottomColor:'#dedede',
                borderBottomWidth:1,
                borderRightColor:'#dedede',
                borderRightWidth:1,
                alignItems: 'center',
                justifyContent: 'center',
            }} >
                <Image
                    style={{
                        width: 135,
                        height: 150,
                    }}
                    source={require('../assets/img/hanger.jpg')}
                />
                <Text style={{
                    alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: 13, fontWeight: 'bold', textAlign: 'center',paddingTop:3
                }}>Clothes</Text>
            </TouchableOpacity>

        </View> 
    );
  };

  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  return (
    <>
      <StatusBar backgroundColor="#000" />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          index.toString();
        }}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
        numColumns={3}
      />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  item: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
  },
  itemWrapperStyle: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemImageStyle: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  contentWrapperStyle: {
    justifyContent: 'space-around',
  },
  txtNameStyle: {
    fontSize: 16,
  },
  txtEmailStyle: {
    color: '#777',
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
});

export default DetailsScreen;
