import React, { Component } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import i18n from "../../locales";
import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Custom_Side_Menu extends Component {
  render() {
    return (
      <ScrollView>

        <SafeAreaView style={styles.sideMenuContainer}>

          <View style={styles.line} />

          <View style={{ width: "100%" }}>

            <Touchable props={this.props} route={0}
                       onPress={() => {
                         this.props.navigation.popToTop();
                       }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name={"home"} style={styles.sideMenuIcon} size={28} />
                <Text style={styles.menuText}> {i18n.t("home")} </Text>
              </View>
            </Touchable>
            <Touchable props={this.props} index={1}
                       onPress={() => {
                         this.props.navigation.replace("Vehicle");
                       }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name={"car"} style={styles.sideMenuIcon} size={28} />
                <Text style={styles.menuText}> {i18n.t("vehicles")} </Text>
              </View>
            </Touchable>
          </View>

        </SafeAreaView>
      </ScrollView>

    );
  }
}
const Touchable = styled.TouchableOpacity`
  background-color: ${(props) => props.props.state.index === props.index ? props.props.activeTintColor : "white"};
  height: 40px;
  flex-direction: column;
  justify-content: center
`;

const styles = StyleSheet.create({
  sideMenuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 150,
    height: 80,
  },
  sideMenuIcon: {
    width: 28,
    height: 28,
    marginRight: 10,
    marginLeft: 20,
  },
  menuText: {
    fontSize: 17,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#e2e2e2",
    marginTop: 15,
  },
  drawerItem: {
    height: 40,
    flexDirection: "column",
    justifyContent: "center",

  },
});


