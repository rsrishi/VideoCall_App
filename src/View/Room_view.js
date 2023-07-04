import { StyleSheet, Text, View } from 'react-native';
import BasicCard from '../components/CreateRoomCard';
import ListCard from '../components/ListRoomCard';

export default function RoomView() {
    return(
        <View>
            <BasicCard/>
            <br/>
            <br/>
            <ListCard/>
        </View>
    )

}