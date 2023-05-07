import { FlatList } from "react-native";
import ProductItem from './item/index';
import React from "react";
import { stylesProducts } from './styles';


const Products = ({products, onSelectItem}) => {

    const renderItem = ({item}) => {
        <ProductItem item={item} onSelectItem={onSelectItem} />
    }

    const keyExtractor = (item) => item.id;

    return(
        <FlatList 
            style={stylesProducts.listContainer} 
            renderItem={renderItem}
            data={products} 
            keyExtractor={keyExtractor}
            alwaysBounceVertical={false} />
    )
}

export default Products;