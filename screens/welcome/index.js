import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} style={styles.PFdMYvNA}>
        <View style={styles.group} />
        <View style={styles.group}>
          <Image style={styles.logo} source={require("./Peddly-Logo-10.png")} />
          <Text style={styles.text}>{"Think Different.\nThink Peddly.\n            "}</Text>
        </View>
        <Text style={styles.footer}>{"Peddly, Inc."}</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FC",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  logo: {
    height: 180,
    width: 180,
    padding: 40,
    borderRadius: 30,
    margin: 40
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    color: "#828AB0",
    fontWeight: "300"
  },
  footer: {
    textAlign: "center",
    fontSize: 18,
    color: "#828AB0",
    fontWeight: "200",
    marginBottom: 20
  },
  PFdMYvNA: {
    backgroundColor: "#F8F0FB"
  }
});
export default WelcomeScreen;