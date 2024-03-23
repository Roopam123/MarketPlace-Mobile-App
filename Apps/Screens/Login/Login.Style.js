import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    login:{
        width:"100%",
        backgroundColor:"black",
        display:"flex",
        height:"100%",
        alignItems:"center",
        // justifyContent:"center",
        paddingTop:100,
        gap:20
    },
    welcome:{
        color:"white",
        fontSize:22,
        fontWeight:"700"
    },
    loginImg:{
        transform: [{scaleX: .8}],
        objectFit:"cover"
    },
    des:{
        color:"white",
        fontSize:18,
        padding:8,
        textAlign:"justify"
    },
    btn:{
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:80
    },
    btnText:{
        color:"black",
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:50,
        paddingRight:50,
        fontSize:18,
        fontWeight:"600"
    }
})

export default styles;