import {View, Text, ScrollView, SafeAreaView,TouchableOpacity} from 'react-native';
import HeaderTab from './HeaderTab';
import Category from './Categories'
import CategoryCard from './CategoryCard';
import RecentCard from './RecentCard';
import {Divider} from 'react-native-elements'
import {Feather} from 'react-native-vector-icons'


export default function Home(){
    const bottomIcons = [
        {
            id:1,
            icon: "home",
            color:'green',
            name:"Home"
        }, 
        {
            id:2,
            icon: "calendar",
            color:'grey',
            name:"Home"
        },  
        {
            id:3,
            icon: "message-circle",
            color:'grey',
            name:"Home"
        },
        {
            id:2,
            icon: "settings",
            color:'grey', 
            name:"Home"
        },

]
    return(
        <SafeAreaView>
   
        <ScrollView>
        <HeaderTab />
        <Category />
        <Divider width={1}/>
        <CategoryCard />
        <RecentCard />
        </ScrollView>
          <Divider width={0.5}/>
          <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
              {
                  bottomIcons.map((icon, i) => <BottomIcons key={i} icon={icon}/>)
              }
          </View>
        </SafeAreaView>
    )
}

const BottomIcons = ({icon})=> (
    <TouchableOpacity style={{margin:10}}>
     <Feather name={icon.icon} size={30} color={icon.color}/>
     <Text>{icon.name}</Text>
    </TouchableOpacity>
 )