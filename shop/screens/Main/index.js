import React, { PureComponent } from "react";
import styled from "styled-components";
import {SafeAreaView, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import TopMenu from "../../components/Navigation/topMenu";
import i18n from '../../locales/index';

Icon.loadFont().then(() => {
});
AntDesignIcon.loadFont().then(() => {
});
const { t } = i18n;
export default class Main extends PureComponent {


  componentDidMount() {
    console.log("componentDidMount in Main");
  }

  componentWillUnmount() {
  }

  render() {
    // const {} = this.state;
    let { navigation } = this.props;
    return (
      <SafeAreaView
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}>
        <View style={{ height: 50 }}>
          <TopMenu name={t("appName")} // logout={this.toggleModal}
          />
        </View>

        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
          <Row>
              <Col onPress={() => navigation.navigate("Vehicle")}>
                <Icon name={"car"} size={30} />
                <Title>{t("vehicles")}</Title>
              </Col>

              <Col onPress={() => navigation.navigate("Routes")}>
                <Icon name={"road-variant"} size={30} />
                <Title>{t("routes")}</Title>
              </Col>

              <Col onPress={() => navigation.navigate("Geozone")}>
                <Icon name={"barley"} size={30} />
                <Title>{t("geozones")}</Title>
              </Col>

              <Col
                onPress={() => navigation.navigate("InspectionReportList")}>
                <Icon name={"lead-pencil"} size={30} />
                <Title>{t("inspectionReportList")}</Title>
              </Col>

              <Col onPress={() => navigation.navigate("Map")}>
                <Icon name={"map"} size={30} />
                <Title>{t("map")}</Title>
              </Col>
          </Row>
        </View>
      </SafeAreaView>
    );
  }
}

//region ====================== Styles ========================================

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
`;

const ModalView = styled.View`
  margin: 30px;
  background-color: white;
  border-radius: 20px;
  padding: 55px;
  align-items: center;
  shadow-radius: 3px;
`;

const ModalText = styled.Text`
  color: black;
  font-weight: bold;
  text-align: center;
  font-size: 19px;
  bottom: 25px;
`;

const ModalButtonsView = styled.View`
  top: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

const CancelButtonView = styled.View`
  height: 60px;
  right: 10px;
`;

const LogoutButtonView = styled.View`
  height: 60px;
  left: 10px;
`;
const Row = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-self: center;
  justify-content: center;
`;

const Col = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  margin: 10px;
  border-radius: 4px;
`;

const Title = styled.Text`
  font-size: 14px;
  text-align: center;
`;

const IOSButtonView = styled.View`
  bottom: 5px;
  border-color: dodgerblue;
  border-width: 1px;
  border-radius: 12px;
`;
//endregion
