import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLOURS, Items} from'../database/Database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MyCart = ({navigation}) => {

    const [product, setproduct] = useState()
    const [total, setTotal] = useState(null)

    useEffect(() => {
        const unsubsribe = navigation.addListener('focus', () => {
           getDataFromDB();
        });
     
        return unsubsribe;
       }, [navigation]);
    //  get data by ID
    const getDataFromDB = async() => {
            let items = await AsyncStorage.getItem('cartItems')
            items = JSON.parse(items);
            let productData = [];
            if(items) {
                Items.forEach(data=>{
                    if(items.includes(data.id)) {
                        productData.push(data);
                        return
                    }
                });

                setproduct(productData);
                getTotal(productData);
            } else {
                setproduct(false);
                getTotal(false);
            }
        };

        const getTotal = (productData) =>{
            let total = 0;
            for(let index = 0; index < productData, length; index++){
            let productPrice = productData[index].productPrice;
            total = total + productPrice;
            }
            setTotal(total);
        }

        const renderProducts = (data, index) => {
            return (
                <View key={index}>
                    <Text>
                        {data.productName}
                    </Text>
                </View>
            );
        };

        return (
            <View style={{
                width: '100%',
                height: '100%',
                backgroundColor: COLOURS.white,
            }}>
                <ScrollView>
                    <View style={{
                        width:'100%',
                        flexDirection: 'row',
                        paddingTop: 16,
                        paddingHorizontal: 16,
                        justifyContent: 'space-between',
                        alignItems: 'center', 
                    }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <MaterialCommunityIcons name='chevron-left' style={
                                {
                                    fontSize: 18,
                                    color: COLOURS.backgroundDark,
                                    padding: 12,
                                    backgroundColor: COLOURS.backgroundLight,
                                    borderRadius: 12,
                                }
                            }/>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 14,
                            color: COLOURS.black,
                            fontWeight: '400',
                        }}>
                            Order Details
                        </Text>
                        <View></View>
                    </View>
                    <Text style={{
                        fontSize: 20,
                        color:  COLOURS.black,
                        fontWeight: '500',
                        letterSpacing: 1,
                        paddingTop: 20,
                        paddingLeft: 16,
                        marginBottom: 10,
                    }}>
                        My Cart
                    </Text>
                    <View>
                        {product ? product.map(renderProducts): null}
                    </View>
                </ScrollView>
            </View>
        );
    };

export default MyCart
