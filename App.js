import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Movie from "./components/Movie";


class MyApp extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require("./img/banner.png")} 	style={{width: '100%', height: 120}} />
                <ScrollView style={styles.scroll}>
                    <Movie title="Doctor Sleep" year="2019" icon_name="skull" poster={require("./img/doctor-sleep.jpg")} />
                    <Movie title="Midway" year="2010" icon_name="skull" poster={require("./img/midway.jpg")} />
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'left',
        justifyContent: 'center',
    },
    scroll: {
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: '#eee'
    }
});

export default MyApp;
