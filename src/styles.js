import { StyleSheet } from 'react-native';

export const stylesPrincipal = StyleSheet.create({
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