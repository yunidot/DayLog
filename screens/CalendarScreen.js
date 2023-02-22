import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import LogContext from "../contexts/LogContext";

const styles = StyleSheet.create({
    block: {},
    text: {
        padding: 16,
        fontSize: 24,
    }
});

const CalendarScreen = () => {
    const {text} = useContext(LogContext);

    return (
        <View style={styles.block}>
            <Text style={styles.text}> text: {text}</Text>
        </View>
    );
}

export default CalendarScreen;

