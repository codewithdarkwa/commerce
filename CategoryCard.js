import {View, Text,ScrollView,Image,TouchableOpacity} from 'react-native';

export default function CategoryCard(){

const products = [
    {
        id:1,
        src:require('./assets/image/laptop2.png'),
        color:'#add8e6',
        price:150,
        name:"MacBook Air M1"
    },
    {
        id:2,
        src:require('./assets/image/headset1.png'),
        color:'pink',
        price:250,
        name:"Headset"
    },
    {
        id:3,
        src:require('./assets/image/Head.png'),
        color:'#eee',
        price:450,
        name:"Headset"
    },
    {
        id:4,
        src:require('./assets/image/shoe7.png'),
        color:'#add8e6',
        price:150,
        name:"Vans"
    },
]
    return(
        <View>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",margin:5}}>
            <Text style={{fontSize:17,fontWeight:"800"}}>Hot Sales</Text>
            <TouchableOpacity>
            <Text style={{color:"grey",fontSize:15,}}>see all</Text>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
              {
                products.map((product,i)=>(
                    <ProductContainer key={i} product={product} />
                ))
              }
            </ScrollView>
          </View>
        </View>
    )
}

const ProductContainer = ({product}) =>(
<View style={{padding:10}}>
   <TouchableOpacity activeOpacity={0.7} style={{backgroundColor:product.color, width:200,height:200,borderRadius:15,margin:10}}>
    <Image source={product.src} resizeMode="cover" style={{width:150,height:150,alignSelf:"center"}}/>
    <TouchableOpacity style={{backgroundColor:"#000",padding:5,width:120,borderRadius:12,bottom:15,margin:5,top:5}}>
     <Text style={{alignSelf:"center",color:"#fff"}}>Free shipping</Text>
    </TouchableOpacity>
   </TouchableOpacity>
   <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around",marginLeft:5}}>
    <Text style={{fontSize:17,fontWeight:"600",marginRight:20}}>{product.name}</Text>
    <Text style={{fontWeight:"600",fontSize:17}}>{'$'+product.price}</Text>
   </View>
   <Text style={{width:200, color:"grey",marginLeft:15,marginTop:10}}>The intuitive and intelligent MacBook is here. Order ...</Text>
</View>
)