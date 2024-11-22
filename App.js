// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';
import Pagina1 from './pages/Pagina1'; 
import Pagina2 from './pages/Pagina2';
import Pagina3 from './pages/Pagina3';
import Pagina4 from './pages/Pagina4';
import Pagina5 from './pages/Pagina5';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ 
          headerStyle: { backgroundColor: '#f3d7c2' },
          headerTintColor: '#fe958f',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Madoka Magica ' }}
        />
        <Stack.Screen
          name="Pagina1"
          component={Pagina1}
          options={{ title: 'Página 1' }}
        />
        <Stack.Screen
          name="Pagina2"
          component={Pagina2}
          options={{ title: 'Página 2' }}
        />
        <Stack.Screen
          name="Pagina3"
          component={Pagina3}
          options={{ title: 'Página 3' }}
        />
        <Stack.Screen
          name="Pagina4"
          component={Pagina4}
          options={{ title: 'Página 4' }}
        />
        <Stack.Screen
          name="Pagina5"
          component={Pagina5}
          options={{ title: 'Página 5' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
