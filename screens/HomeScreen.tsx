import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../type";
import { View, useWindowDimensions, StyleSheet } from "react-native";
import { Canvas, Circle, Group, Rect } from "@shopify/react-native-skia";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export function HomeScreen({navigation} : Props){
    return (
        <View style={{flex:1}}>
            <Background/>
        </View>
    );
}

function Background() {
    const {height, width} = useWindowDimensions();
    return (
        <Canvas style={styles.background}>
            <Rect x={0} y={0} width={width} height={324} color={"#7165E3"}>
            </Rect>      
        </Canvas>
    );
}

const styles = StyleSheet.create({
    background:{
        position: 'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0
    }
})