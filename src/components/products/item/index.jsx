import { Text, TouchableOpacity } from "react-native";

import React from "react";
import { stylesProductItem } from './styles';

const ProductItem = ({item, onSelectItem}) => {
    
    return(
        <TouchableOpacity styles={stylesProductItem.touchableContainer} onPress={() => onSelectItem(item.id)}>
            <Text style={stylesProductItem.textProductItem}>
                {item.value}
            </Text>
        </TouchableOpacity>
    )
}

export default ProductItem;