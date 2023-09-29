import { Text, View } from "react-native";

export function Header(){
    return (
        <View style={{backgroundColor:"#03ABF8", height:70, width:'100%', alignItems:"center", justifyContent:'center'}}>
            <Text style={{color:'white', fontWeight:'bold', fontSize:32}}>Iniciativas</Text>
        </View>
    );
}