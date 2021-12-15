import React, { useEffect, useState } from 'react'
import {
    View, Text, StyleSheet, TextInput, FlatList, ActivityIndicator,
    Image,
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';


const SubCategory = ({ navigation }) => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [searchText, setSearchText] = useState('')
    const [filteredData, setFilteredData] = useState('')
    const [searchData, setSearchData] = useState([]);


    const SearchBar = async (e) => {
        let text = e.toLowerCase()
        setSearchText(text);
        const filterdata = await searchData.filter((item) => {
            return `${item.name.title}${item.name.first} ${item.name.last}`.toLowerCase().includes(searchText)
        })
        if (!text || text === '') {
            setFilteredData(searchData)
        } else if (!filterdata.length) {
            setFilteredData(searchData)
        } else if (Array.isArray(filterdata)) {
            setFilteredData(filterdata)
        }
    }


/*     const searchFilterFunction = text => {    
        const filterdata = this.searchData.filter(item => {      
          const itemData = `${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
          
           const textData = text.toUpperCase();
            
           return itemData.indexOf(textData) > -1;    
        });
        
        setFilteredData(filterdata)
  
      }; */


    const loadMoreItem = () => {
        setCurrentPage(currentPage + 1);
    };

    const renderLoader = () => {
        return isLoading ? (
            <View style={styles.loaderStyle}>
                <ActivityIndicator size="large" color="#aaa" />
            </View>
        ) : null;
    };

    const getUsers = () => {
        setIsLoading(true);
        axios
            .get(`https://randomuser.me/api/?page=${currentPage}&results=100`)
            .then(res => {
                setUsers([...users, ...res.data.results]);
                setSearchData([...searchData, ...res.data.results])
                setIsLoading(false);
            });
    };

    useEffect(() => {
        getUsers();

    }, [currentPage])


    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemWrapperStyle}>
                <Image
                    style={styles.itemImageStyle}
                    source={{ uri: item.picture.large }}
                />
                <View style={styles.contentWrapperStyle}>
                    <Text
                        style={
                            styles.txtNameStyle
                        }>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
                </View>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Clothes</Text>
            <View style={styles.searchSection}>
                <AntDesign style={styles.searchIcon} name="search1" size={20} color="#000" />
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    onChangeText={SearchBar}
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={{
                height: '100%', margin: 5, borderRadius: 5, borderWidth: 1,
                borderColor: '#cecece'
            }}>
                <FlatList
                    data={filteredData && filteredData.length > 0 ? filteredData : users}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => {
                        index.toString();
                    }}
                    ListFooterComponent={renderLoader}
                    onEndReached={loadMoreItem}
                    onEndReachedThreshold={0}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingVertical: 15,
        letterSpacing: 0.5
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5, borderWidth: 2,
        borderColor: '#cecece',
    },
    searchIcon: {
        padding: 8,
        borderRadius: 5

    },
    input: {
        flex: 1,
        paddingTop: 8,
        paddingRight: 10,
        paddingBottom: 8,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        borderRadius: 5
    },
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
        borderBottomColor: '#cecece'

    },
    itemImageStyle: {
        width: 25,
        height: 25,
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
})
export default SubCategory
