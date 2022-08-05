import {View, Text} from 'react-native';
import HeaderTab from './HeaderTab';
import Category from './Categories'
import {Divider} from 'react-native-elements'

export default function Home(){
    return(
        <View>
        <HeaderTab />
        <Category />
        <Divider width={1}/>
        </View>
    )
}