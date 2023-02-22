import React, { useContext } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import FloatingWriteButton from "../components/FloatingWriteButton"

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
});

const FeedScreen = () => {
    return (
        <View style={styles.block}>
            <FloatingWriteButton />
        </View>
    );
}

export default FeedScreen;

