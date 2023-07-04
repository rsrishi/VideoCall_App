import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonAppBar from './src/components/NavBar';
import FixedBottomNavigation from './src/components/BottomNavBar';
import RoomView from './src/View/Room_view';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ButtonAppBar/>
      <View style= {styles.container2}>
      <RoomView style={styles.room_view}/>
      </View>
      {/* <FixedBottomNavigation/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    alignSelf: 'stretch',
    backgroundColor: 'rgb(164 ,241, 243)',
  },
  room_view :{
    padding : 4,
  },
  container2:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
});
