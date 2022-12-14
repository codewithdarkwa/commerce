import {View, Text,StyleSheet,Image,ScrollView, TouchableOpacity} from 'react-native';
import {Feather} from 'react-native-vector-icons'

export default function HeaderTab(){

const Categories = [
    {
        id:1,
        src:require('./assets/image/laptop4.png'),
        name:"Laptop"
    },
    {
        id:2,
        src:require('./assets/image/headset.png'),
        name:"Headset"
    },
    {
        id:3,
        src:require('./assets/image/shoe4.png'),
        name:"Jordan"
    },
    {
        id:4,
        src:require('./assets/image/shoe7.png'),
        name:"Vans"
    }
]
    return(
        <View style={styles.container}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
             <TouchableOpacity style={{padding:5}}>
                <Feather name="sliders" size={24}/>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={{flexDirection:"row",}} showsHorizontalScrollIndicator={false} horizontal>
             { Categories.map((item,i)=> <Category key={i} item={item}/>) }
            </ScrollView>
            </View>
        </View>
    )
}


 const Category = ({item}) =>(
    <View>
        <TouchableOpacity style={{
            flexDirection:"row",
            alignItems:"center",
            borderWidth:0.5,
            borderColor:'#eee',
            borderRadius:10,
            padding: 5,
            margin:5
        }}>
            <Image source={item.src} style={{width:40,height:40,borderRadius:10}}/>
            <Text style={{fontSize:15}}>{item.name}</Text>    
        </TouchableOpacity>
    </View>
 )
const styles = StyleSheet.create({

container:{
    margin:15,
}
})