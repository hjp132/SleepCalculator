import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Picker } from "react-native";

const WakeUpAt = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    let hour;
    let minute;
    let timeprefix;
    return (
            <View>
                <View>
                    <Text style={styles.title}>I have to wake up at...</Text>
                </View>
                
            <View style={styles.pickerContainer}>
                <Picker 
                    id="hour"
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150, color: '#7FDBFF'}}
                    // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)    }
                    onValueChange={(itemValue, itemIndex) => Testfunc(hour, itemValue, itemIndex, setSelectedValue)    }
                    >
                    <Picker.Item label="(hour)" value="0" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                    <Picker.Item label="7" value="7" />
                    <Picker.Item label="8" value="8" />
                    <Picker.Item label="9" value="9" />
                    <Picker.Item label="10" value="10" />
                    <Picker.Item label="11" value="11" />
                    <Picker.Item label="12" value="12" />
                </Picker>

                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150, color: '#7FDBFF', flexDirection: "row", display: "flex" }}
                    onValueChange={(itemValue, itemIndex) => Testfunc(minute, itemValue, itemIndex, setSelectedValue)    }>
                    <Picker.Item label="(minute)" value="0" />
                    <Picker.Item label="00" value="00" />
                    <Picker.Item label="05" value="05" />
                    <Picker.Item label="10" value="10" />
                    <Picker.Item label="15" value="15" />
                    <Picker.Item label="20" value="20" />
                    <Picker.Item label="25" value="25" />
                    <Picker.Item label="30" value="30" />
                    <Picker.Item label="35" value="35" />
                    <Picker.Item label="40" value="40" />
                    <Picker.Item label="45" value="45" />
                    <Picker.Item label="50" value="50" />
                    <Picker.Item label="55" value="55" />
                </Picker>

                <Picker
                    id="amorpm"
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 100, color: '#7FDBFF' }}
                    onValueChange={(itemValue, itemIndex) => Testfunc(timeprefix, itemValue, itemIndex, setSelectedValue)    }>
                    <Picker.Item label="AM" value="AM" />
                    <Picker.Item label="PM" value="PM" />
                </Picker>
            </View>

            <View>
                <TouchableOpacity 
                onPress={ () => console.log(hour + ":" + minute + timeprefix)}>
                    <Text style={styles.calculate}>Calculate</Text>
                </TouchableOpacity>
            </View>

            </View>
        
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#7FDBFF',
        textAlign: 'center',
        height: 50
    },
    pickerContainer: {
        flexDirection: 'row'
    },
    calculate: {
        textAlign: 'center',
        color: '#fff',


    }
      
});

function Testfunc (time, value, index, setSelectedValue) {
    setSelectedValue(value)
    GettingTheValue(time, value)

    
}
function GettingTheValue (time, value) {
    time = value;
    return console.log(time)
}
export default WakeUpAt