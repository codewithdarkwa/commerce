import {View, Text,ScrollView,Image,TouchableOpacity} from 'react-native';

export default function CategoryCard(){
    return(
        <View>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",margin:15}}>
            <Text style={{fontSize:17,fontWeight:"800"}}>Hot Sales</Text>
            <Text style={{color:"grey",fontSize:15,}}>see all</Text>
          </View>
          <View style={{}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
              <ProductContainer />
              <ProductContainer />
              <ProductContainer />
            </ScrollView>
          </View>
        </View>
    )
}

const ProductContainer = () =>(
<View>
   <View style={{backgroundColor:"#add8e6", width:200,height:200,borderRadius:15,margin:10}}>
    <Image source={require('./assets/image/laptop2.png')} resizeMode="cover" style={{width:200,height:170,alignSelf:"center"}}/>
    <TouchableOpacity style={{backgroundColor:"#000",padding:5,width:120,borderRadius:12,bottom:15,margin:5}}>
     <Text style={{alignSelf:"center",color:"#fff"}}>Free shipping</Text>
    </TouchableOpacity>
   </View>
   <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around",marginLeft:5}}>
    <Text style={{fontSize:17,fontWeight:"600",marginRight:20}}>MacBook Air M1</Text>
    <Text style={{fontWeight:"600"}}>$150</Text>
   </View>
   <Text style={{width:200, color:"grey",marginLeft:5}}>The intuitive and intelligent MacBook is here. Order ...</Text>
</View>
)