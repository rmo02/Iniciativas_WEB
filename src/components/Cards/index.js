import { Text, View } from "react-native";
import { Card } from "react-native-paper";

export function Cards({data}) {
    return (
        <Card style={{width:280}}>
        <Card.Content>
          <Text variant="titleLarge" style={{fontWeight:"bold"}}>{data?.tipo_sugestao}</Text>
          <Text variant="bodyMedium">{data?.sugestao}</Text>
          <View style={{borderWidth:0.4, borderColor:'gray', marginTop:10}}/>
          <View style={{flexDirection:'row', marginTop:2}}>
          <Text variant="bodyMedium">Setor:</Text>
          <Text variant="bodyMedium"> {data?.setor}</Text>
          </View>
          <View style={{flexDirection:'row', marginTop:2}}>
          <Text variant="bodyMedium">Nome:</Text>
          <Text variant="bodyMedium"> {data?.nome}</Text>
          </View>
        </Card.Content>
      </Card>
    );
}