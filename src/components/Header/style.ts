import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 25,
    color: '#fff',
  },
  description: {
    fontSize: 17,
    fontWeight: 'normal',
    marginTop: 25,
    color: '#fff',
    textAlign: 'justify',
  },
});

export default style;
