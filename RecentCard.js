import {View, Text,ScrollView,Image,TouchableOpacity} from 'react-native';
import {FontAwesome5,Feather} from 'react-native-vector-icons'

export default function RecentCard(){

  const products = [
    {
        id:1,
        src:require('./assets/image/laptop4.png'),
        color:'#add8e6',
        price:'$150',
        name:"MackBook Air M1"
    },
    {
        id:2,
        src:require('./assets/image/headset2.png'),
        color:'#eee',
        price:'$250',
        name:"Earphone"
    },
    {
        id:3,
        src:require('./assets/image/Head.png'),
        color:'pink',
        price:'$450',
        name:"Headset"
    },
    {
        id:4,
        src:require('./assets/image/shoe7.png'),
        color:'#add8e6',
        price:'$150',
        name:"Jordan"
    },
]
    return(
        <View style={{marginTop:20}}>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",margin:15}}>
            <Text style={{fontSize:17,fontWeight:"800"}}>Recently Viewed</Text>
            <Text style={{color:"grey",fontSize:15,}}>see all</Text>
          </View>
          <View style={{}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
              {products.map((product,i)=> <ProductContainer key={i} product={product}/>)}
            </ScrollView>
          </View>
        </View>
    )
}

const ProductContainer = ({product}) =>(
<View style={{padding:10}}>
   <TouchableOpacity activeOpacity={0.7} style={{backgroundColor:product.color, width:200,height:200,borderRadius:15,margin:5}}>
    <Image source={product.src}  style={{width:170,height:150,top:10,alignSelf:"center"}}/>
   </TouchableOpacity>
   <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around",marginLeft:5}}>
    <Text style={{fontSize:18,fontWeight:"700",marginRight:20}}>{product.name}</Text>
    <TouchableOpacity style={{marginRight:15}}>
    <Feather name="heart" color="grey" size={22} />
    </TouchableOpacity>
   </View>
   <Text style={{width:200, color:"grey",marginLeft:6,margin:10}}>The intuitive and intelligent MacBook is here. Order ...</Text>
  <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
    <Text style={{marginLeft:15,marginTop:10,fontSize:20,fontWeight:"900"}}>{product.price}</Text>
    <TouchableOpacity>
    <FontAwesome5 name="plus" size={15} style={{marginRight:10,backgroundColor:"teal",color:"#fff",padding:10,}}/>
    </TouchableOpacity>
  </View>
</View>
)