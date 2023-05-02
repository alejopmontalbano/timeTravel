import { Text, View, Button, TextInput, FlatList, TouchableOpacity, Modal } from 'react-native';
import { Input } from './components/input/index';
import { Products } from './components/products/index';
import { CustomModal } from './components/modal/index';
import { stylesPrincipal } from './styles';
import { useState } from 'react';

export default function App() {

  const [product, setProduct] = useState('');
  const [watches, setWatches] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectProduct, setSelectProduct] = useState(null);

  const onAddWatch = () => {
    if (product.length === 0) return;
    setWatches([
      ...watches,
      {
        id:Math.random().toString(),
        value: product
      }
    ])
    setProduct('');
  }

  const btnCancel = () => {
    setModalVisible(!modalVisible);
    setSelectProduct(null);
  }

  const btnDelete = (id) => {
    setWatches(watches.filter(wt => wt.id !== id))
    setModalVisible(!modalVisible);
  }

  const btnSelect = (id) => {
    setModalVisible(!modalVisible);
    const selectProduct = watches.find(wt = wt.id === id);
    setSelectProduct(selectProduct);
  } 
  
  return (
    <View style={stylesPrincipal.container}>
      <View style={stylesPrincipal.secondContainer}>
          <Input
            style={stylesPrincipal.searchText}
            onChangeText= {(product) => setProduct(product)}
            onHandlerButton= {onAddWatch}
            value={product} />
          <Products products={watches} onSelectItem={btnSelect} />
          <CustomModal 
            isVisible={modalVisible}
            onCancel={btnCancel}
            onDelete={btnDelete}
            selectedProduct={selectProduct} />
      </View>
    </View>
  );
}


