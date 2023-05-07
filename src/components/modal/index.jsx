import {Button, Modal, Text, View} from "react-native";
import React from "react";
import { stylesModal } from "./styles";

const CustomModal = ({isVisible, selectedProduct, onCancel, onDelete}) => {
    
    return(
        <Modal visible={isVisible}>
            <View style={stylesModal.containerModal}>
                <Text style={stylesModal.titleModal}>
                    Reloj seleccionado
                </Text>
            </View>
            <View style={stylesModal.deleteModalContainer}>
                <Text style={stylesModal.deleteModal}>¿Estas seguro que deseas eliminar este producto?</Text>
                <Text style={stylesModal.deleteModal}>{selectedProduct?.value}</Text>
            </View>
            <View>
                <Button title="Cancelar" onPress={onCancel}></Button>
                <Button title="Eliminar" onPress={() => onDelete(selectedProduct.id)}></Button>
            </View>
        </Modal>
    );
}

export default CustomModal;