import {View, Text, ScrollView, SafeAreaView,TouchableOpacity} from 'react-native';
import HeaderTab from './HeaderTab';
import Category from './Categories'
import CategoryCard from './CategoryCard';
import RecentCard from './RecentCard';
import {Divider} from 'react-native-elements'
import {Ionicons,Feather} from 'react-native-vector-icons'


const Home = () =>{
    const bottomIcons = [
        {
            id:1,
            icon:  <Feather name="home" size={30} color='grey'/>,
            name:"Home"
        }, 
        {
            id:2,
            icon:  <Ionicons name="wallet" size={30} color='grey'/>,
            name:"Wallet"
        },  
        {
            id:3,
            icon: <Feather name='activity' size={30} color='grey'/>,
            name:"Statistics"
        },
        {
            id:2,
           icon: <Ionicons name="settings" size={30} color='grey'/>,
            name:"Profile"
        },

]
    return(
    <SafeAreaView style={{flex:1}}>
    <ScrollView>
        <HeaderTab />
        <Category />
        <Divider width={1}/>
        <CategoryCard />
        <RecentCard />
     </ScrollView>
          <Divider width={0.5}/>
          <View style={{flexDirection:"row",justifyContent:"space-between", paddingHorizontal:15}}>
              { bottomIcons.map((item, i) => <BottomIcons key={i} item={item}/>)}
          </View>
        </SafeAreaView>
    )
}

export default Home
const BottomIcons = ({item})=> (
    <TouchableOpacity style={{margin:5}}>
    {item.icon}
     <Text style={{
        color:'black'
     }}>{item.name}</Text>
    </TouchableOpacity>
 )
 