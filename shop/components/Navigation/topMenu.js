import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {DotIndicator} from "react-native-indicators";
import moment from "moment";

Icon.loadFont().then(() => {});
MaterialIcons.loadFont().then(() => {});
AntDesign.loadFont().then(() => {});

export default class topMenu extends Component {

    toggleDrawer = () => {
        this.props.navigationProps.openDrawer();
    }

    goBack = () => {
        if (this.props.goBackAgrooperation) {
            this.props.navigationBack.navigate("AgroOperations", {
                updateData: false
            });
        } else {
            this.props.navigationBack.goBack();
        }
    }

    render() {

        return (
            <View style={styles.container}>
                {
                    this.props.navigationProps &&
                    <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                        <Icon name={"menu"} style={styles.icon} size={35}/>
                    </TouchableOpacity>
                }
                {
                    this.props.navigationBack &&
                    <TouchableOpacity onPress={this.goBack.bind(this)}>
                        <Icon name={"arrow-left"} style={styles.icon} size={30}/>
                    </TouchableOpacity>
                }
                <Text style={styles.headerText}>{this.props.name}</Text>
                {
                    this.props.loader ?
                        <DotIndicator color='black' size={4} count={3} style={styles.indicator}/>
                        :
                        <DotIndicator color='white' size={4} count={3} style={styles.indicator}/>
                }
                {
                    this.props.saveInspectionReport &&
                    <TouchableOpacity style={styles.rightButton}
                                      onPress={this.props.saveInspectionReport}>
                        <Icon name={"content-save-outline"} size={30}/>
                    </TouchableOpacity>
                }
                {
                    this.props.saveAgrooperation &&
                    <TouchableOpacity style={styles.rightButton}
                                      onPress={this.props.saveAgrooperation}>
                        <Icon name={"content-save-outline"} size={30}/>
                    </TouchableOpacity>
                }
                {
                    this.props.saveJournal &&
                    <TouchableOpacity style={styles.rightButton}
                                      onPress={this.props.saveJournal}>
                        <Icon name={"content-save-outline"} size={30}/>
                    </TouchableOpacity>
                }
                {
                    this.props.addAgrooperation &&
                    <TouchableOpacity style={styles.rightButton}
                                      onPress={this.props.addAgrooperation}>
                        <Icon name="plus" size={35}/>
                    </TouchableOpacity>
                }
                {
                    this.props.mapInfo &&
                    <TouchableOpacity style={styles.rightButton}
                                      onPress={this.props.mapInfo}>
                        {this.props.showLabels === true ?
                            <MaterialIcons name="info" size={35} color={'dodgerblue'}/>
                            :
                            <MaterialIcons name="info" size={35} color={'#585858'}/>
                        }
                    </TouchableOpacity>
                }
                {
                    this.props.syncItems &&
                    <TouchableOpacity style={styles.rightButton}
                                      onPress={this.props.syncItems}>
                        <View>
                            {this.props.pendingAgrooperations >= 0 ?
                                <View style={{position: 'relative', height: 30, width: 30}}>
                                    <AntDesign name="sync" size={30}
                                               color={this.props.pendingAgrooperations > 0 ? '#5CB85C' : 'black'}/>
                                    <View style={styles.pendingView}>
                                        {this.props.pendingAgrooperations > 0 ?
                                            <Text style={styles.pendingText}>{this.props.pendingAgrooperations}</Text>
                                            : null
                                        }
                                    </View>
                                </View>
                                : <Icon name="sync" size={30}/>
                            }
                        </View>
                    </TouchableOpacity>
                }
                {
                    this.props.showFilter &&
                    <View style={styles.rightButton}>
                        <TouchableOpacity style={{
                            flexDirection: "row",
                            justifyContent: 'flex-end',
                            alignItems: "center"
                        }} onPress={this.props.showFilter}>
                            {this.props.date &&
                            <Text style={styles.dateText}>{moment(this.props.date).format('DD.MM.YY')}</Text>
                            }
                            <Icon name={"filter"} size={30}
                                  color={this.props.filterColor ? this.props.filterColor : '#585858'}/>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "white",
        elevation: 10,
        alignItems: 'center',
        height: 50,
        width: '100%'
    },
    icon: {
        marginLeft: 10
    },
    headerText: {
        fontSize: 20,
        marginLeft: 14,
        marginBottom: 3,
        fontWeight: "bold",
    },
    rightButton: {
        alignItems: 'flex-end',
        paddingRight: 12
    },
    indicator: {
        flex: 1,
        justifyContent: 'flex-start',
        top: 4,
        left: 4
    },
    dateText: {
        fontSize: 17,
        right: 5,
    },
    pendingView: {
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        bottom: 30
    },
    pendingText: {
        position: "absolute",
        fontSize: 11,
        fontWeight: "bold",
        color: '#5CB85C'
    }
})
