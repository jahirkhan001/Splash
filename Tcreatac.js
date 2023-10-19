import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, } from "react-native";

const Tcreatac = () => {

    return (
        <ScrollView style={{ flex: 1, }}>
            <View style={{ backgroundColor: '#85ed2f', height: 200, padding: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: '500', color: 'black', }}>Creatacount</Text>
                <Text style={{ fontSize: 20, color: 'black', }}>Please Singup to continue</Text>
            </View>
            <View style={{ backgroundColor: 'white', height: 600, width: '100%', marginTop: -70, borderRadius: 50, padding: 10 }}>
                <Text style={{ fontSize: 22, fontWeight: '500', marginTop: 20 ,}}>Name*</Text>
                <TextInput style={{ borderWidth: 1 }} />

                <Text style={{ fontSize: 22, fontWeight: '500', marginTop: 10 }}>Phone*</Text>
                <TextInput style={{ borderWidth: 1 }} />

                <Text style={{ fontSize: 22, fontWeight: '500', marginTop: 10 }}>Email*</Text>
                <TextInput style={{ borderWidth: 1 }} />

                <Text style={{ fontSize: 22, fontWeight: '500', marginTop: 10 }}>Password*</Text>
                <TextInput style={{ borderWidth: 1 }} />

                <Text style={{ fontSize: 22, fontWeight: '500', marginTop: 10 }}>Confirm Password*</Text>
                <TextInput style={{ borderWidth: 1 }} />
                <Text style={{ fontSize: 15, borderColor: 'black', textAlign: 'center' }}>end to end encrypted and private policy</Text>

                <TouchableOpacity style={{ backgroundColor: '#d4ca1c', padding: 15, borderRadius: 15, marginTop: 15 }}>
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', fontSize: 20 }}>SIGN UP</Text>

                </TouchableOpacity>
                <View style={{ borderBottomWidth: 1, marginTop: 25, borderColor: 'blue' }}>

                </View>
                <Text style={{ backgroundColor: '#2196ad', padding: 6, alignSelf: 'center', marginTop: -15, borderRadius: 15, color: 'white', fontSize: 15 }}>or</Text>
            </View>

        </ScrollView>
    );
};
export default Tcreatac;
