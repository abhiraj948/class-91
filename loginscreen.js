import React,{Component} from 'react'
import {View,Text,StyleSheet,Button,TextInput,Image} from "react-native"
export default class LoginScreen extends Component {
    constructor(){
    super()
        this.state={

        }
    }
    render(){
        return(
            
        
            <View style={styles .container}>
                <Image source={require("../assets/logo.jpg")}
                style={styles.iconImage}
                ></Image>
                <Text style={styles.apptitle}>Book Refferer</Text>
                <TextInput style={styles.InputFont}
                onChangeText={(username)=>this.setState({username})}
                placeholder={"username"}
                ></TextInput>
                <TextInput style={styles.InputFont}
                    onChangeText={(password)=>this.setState({password})}
                    placeholder={"password"}
                    secureTextEntry={true}
                ></TextInput>
                <Button style={styles.submitbutton}onPress={this.props.navigation.navigate("HomeScreen")}
                title="submit"
                color="#183D83"
                ></Button>
            </View>
            
            
        )

        

    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F0BCE1"
    },
    InputFont:{
        height:40,
        marginTop:40,
        borderWidth:2,
        borderRadius:10,
        borderColor:"#183D83",
        color:"white"
    },
    submitbutton:{
        marginTop:20,
        alignItems:"center",
        justifyContent:"center"
    },
    iconImage:{
        width:20,
        height:20
    }
})