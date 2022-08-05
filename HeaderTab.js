import {View, Text,StyleSheet,TextInput} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Input } from 'react-native-elements';
import {FontAwesome5} from 'react-native-vector-icons'


export default function HeaderTab(){
    return(
        <View>
           <View style={styles.header}>
           <FontAwesome5 name="chevron-left" size={24}/>
           <TextInput 
           placeholder="Search for a products, cloth..."
           style={styles.input}
           />
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
      marginTop:20,
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center"
    },
    input:{
     width:350,
     padding:12,
     outline: "none",
     border:"none",
     borderRadius:25,
     backgroundColor:"#eee",
     fontSize:18

    }
})