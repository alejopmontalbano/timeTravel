import {Button, Modal, Text, View} from "react-native";

import React from "react";
import { styles } from "./styles";

const CustomModal = ({isVisible, selectedProduct, onCancel, onDelete}) => {
    return(
        <Modal visible={isVisible}>
            <View style={styles.containerModal}>
                <Text style={styles.titleModal}>
                    Reloj seleccionado
                </Text>
            </View>
            <View style={styles.deleteModalContainer}>
                <Text style={styles.deleteModal}>¿Estas seguro que deseas eliminar este producto?</Text>
                <Text style={styles.deleteModal}>{selectedProduct.value}</Text>
            </View>
            <View>
                <Button title="Cancelar" onPress={onCancel}></Button>
                <Button title="Eliminar" onPress={onDelete(selectedProduct.id)}></Button>
            </View>
        </Modal>
    )
}

export default CustomModal;