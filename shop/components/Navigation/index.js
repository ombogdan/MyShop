import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainScreen from '../../screens/Main';

import Custom_Side_Menu from './sideMenu';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function LeftMenu(props) {
  return (
    <Drawer.Navigator
      initialRouteName={props.route}
      drawerContent={(props) => <Custom_Side_Menu {...props} />}
      drawerContentOptions={{activeTintColor: 'rgb(219,218, 218)'}}>
      <Drawer.Screen
        name="Home"
        component={MainScreen}
        options={MainScreen.navigationOptionsDrawer}
      />
      <Drawer.Screen name="Vehicle" component={VehicleScreen} />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Vehicle" options={{headerShown: false}}>
          {(props) => <LeftMenu {...props} route={'Vehicle'} />}
        </Stack.Screen>
        <Stack.Screen name="Geozone" options={{headerShown: false}}>
          {(props) => <LeftMenu {...props} route={'Geozone'} />}
        </Stack.Screen>
        <Stack.Screen name="Map" options={{headerShown: false}}>
          {(props) => <LeftMenu {...props} route={'Map'} />}
        </Stack.Screen>
        <Stack.Screen
          name="InspectionReportList"
          options={{headerShown: false}}>
          {(props) => <LeftMenu {...props} route={'InspectionReportList'} />}
        </Stack.Screen>
        <Stack.Screen name="Routes" options={{headerShown: false}}>
          {(props) => <LeftMenu {...props} route={'Routes'} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const Tab = createBottomTabNavigator();
//
// function Tabs() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator initialRouteName="MapScreen">
//                 {/*<Tab.Screen name="Home" component={MainScreen}/>*/}
//                 <Tab.Screen name={i18n.t('vehicles')} component={VehicleScreen}
//                             options={{tabBarIcon: () => (<Icon name={"car"} size={30}/>)}}/>
//                 <Tab.Screen name={i18n.t('geozones')} component={GeozoneScreen}
//                             options={{tabBarIcon: () => (<Icon name={"barley"} size={30}/>)}}/>
//                 <Tab.Screen name={i18n.t('map')} component={MapScreen}
//                             options={{tabBarIcon: () => (<Icon name={"map"} size={30}/>)}}/>
//                 <Tab.Screen name={i18n.t('inspectionReportList')} component={InspectionReportListScreen}
//                             options={{tabBarIcon: () => (<Icon name={"lead-pencil"} size={30}/>)}}/>
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }
