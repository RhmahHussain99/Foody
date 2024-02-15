import {View, Text} from 'react-native'
import { react } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home"



const Tab = createBottomTabNavigator()

export default function tabs(){

return(
  <Tab.Navigator>
    <Tab.Screen
    name = "index"
    component={
      Home
    }
    
    />
  </Tab.Navigator>
)

}

// export default function drawer() {
//   return (
//     <Drawer>
//       <Drawer.Screen
//         name="index" 
//         options={{
//           drawerLabel: 'Home',
//           title: 'Home',
//         }}
//       />
//       <Drawer.Screen
//         name="index" 
//         options={{
//           drawerLabel: 'Favorites',
//           title: 'Favorites',
//         }}
//       />

// <Drawer.Screen
//         name="index" 
//         options={{
//           drawerLabel: 'RecentlyViewed',
//           title: 'RecentlyViewed',
//         }}
//       />

// <Drawer.Screen
//         name="index" 
//         options={{
//           drawerLabel: 'Settings',
//           title: 'Settings',
//         }}
//       />
//     </Drawer>
//   );
// }
