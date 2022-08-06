import {View, Text,ScrollView,Image,TouchableOpacity} from 'react-native';
import {FontAwesome5,Feather} from 'react-native-vector-icons'

export default function RecentCard(){

  const products = [
    {
        id:1,
        src:require('./assets/image/laptop4.png'),
        color:'#add8e6',
        price:'$150'
    },
    {
        id:2,
        src:require('./assets/image/headset2.jpg'),
        color:'#eee',
        price:'$250'
    },
    {
        id:3,
        src:require('./assets/image/head.png'),
        color:'pink',
        price:'$450'
    },
    {
        id:4,
        src:require('./assets/image/shoe7.png'),
        color:'#add8e6',
        price:'$150'
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
<View>
   <View style={{backgroundColor:product.color, width:200,height:200,borderRadius:15,margin:5}}>
    <Image source={product.src}  style={{width:170,height:150,top:10,alignSelf:"center"}}/>
   </View>
   <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around",marginLeft:5}}>
    <Text style={{fontSize:18,fontWeight:"700",marginRight:20}}>MacBook Air M1</Text>
    <TouchableOpacity>
    <Feather name="heart" size={20}/>
    </TouchableOpacity>
   </View>
   <Text style={{width:200, color:"grey",marginLeft:15}}>The intuitive and intelligent MacBook is here. Order ...</Text>
  <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
    <Text style={{marginLeft:15,marginTop:10,fontSize:18,fontWeight:"900"}}>{product.price}</Text>
    <TouchableOpacity>
    <FontAwesome5 name="plus" size={15} style={{marginRight:10,backgroundColor:"green",color:"#fff",padding:10,borderRadius:5}}/>
    </TouchableOpacity>
  </View>
</View>
)