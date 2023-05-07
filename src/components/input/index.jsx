import {Button, TextInput, View} from "react-native";
import React from "react";
import { stylesInput } from "./styles";

const Input = ({value, onChangeText, onHandlerButton}) => {
    
    return(
        <View style={stylesInput.inputContainer}>
            <TextInput 
                placeholder='Agregue su reloj aquí...' 
                style={stylesInput.inputText} 
                value={value}
                onChangeText={onChangeText} />
            <Button 
                style={stylesInput.btnInput}
                onPress={onHandlerButton}/>
        </View>
    )
}

export default Input;