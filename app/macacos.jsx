import { useState } from "react";
import { View, Text, TextInput, Button, ActivityIndicator } from "react-native"

const url = "http://localhost:3000/macacos";

export default function macacos() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");



    return (
        <View><h1>aqui haverão macacos</h1></View>
    );

}