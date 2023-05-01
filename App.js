import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
          <TextInput style={styles.searchText} placeholder='Busca tu reloj'/>
          <Button title='Buscar'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  secondContainer: {
    flexDirection: 'row',
    marginVertical: 30,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  searchText: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor:'#322214',
    width: '50%',
    marginRight: 40,
  }
});

