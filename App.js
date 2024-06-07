import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Perfil from  './telas/Perfil.js';
import Localizacao from './telas/Localizacao.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <NavigationContainer>

        <Tab.Navigator>

          <Tab.Screen
            name='Perfil'
            component={Perfil}
            options={{
              tabBarIcon:({color, size}) =>(
                <Ionicons name='person-circle' size={size} color={color} />
              )
            }}
          />

          <Tab.Screen
            name='Localizacao'
            component={Localizacao}
            options={{
              tabBarIcon:({color, size}) =>(
                <Ionicons name='compass' size={size} color={color} />
              )
            }}
          />

        </Tab.Navigator>

      </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
