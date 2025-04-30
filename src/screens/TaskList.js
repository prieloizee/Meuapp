import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native"

export default function TaskList({navigation}){
    const tasks = [
        {
            id:1,
            title:"Comprar Leite",
            date:"2024-05-27",
            time:"10:00",
            address:"Supermercado Noemia",
        },{
            id:2,
            title:"Enviar e-mail",
            date:"2024-06-20",
            time:"14:45",
            address:"Trabalho"
        },{ 
            id:3,
            title:"Estudar",
            date:"2024-06-19",
            time:"16:30",
            address:"Escola"}
    ];

    const handleTaskPress = (task) =>{  //simular um objeto
        navigation.navigate("TaskDetail",{ task });

    }

    return(
        <View style={ styles.container}>
            <FlatList
            data={tasks}
            //chave primaria
            keyExtractor={(item)=>item.id.toString}
            //renderizar todos os items dentro dos dados
            renderItem={({item})=>(
                <TouchableOpacity style={styles.itemCard} onPress={()=> handleTaskPress(item)}>
                    <Text>{item.title}</Text>
                </TouchableOpacity>
            )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        paddingTop: 50,
    },
    itemCard:{
        padding:15,
        backgroundColor:"purple",
        marginBottom: 10,
        borderRadius: 8,
    }
})