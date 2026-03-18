
import { View, Text } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import ModalTabsNavigator from './src/navigation/ModalTabsNavigator';
 
const Drawer = createDrawerNavigator(); 
 
function HomeScreen() { 
    return ( 
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
            <Text>Bem-vindo ao aplicativo. Utilize o menu de navegação para acessar as telas de modais e as listas com rolagem</Text> 
        </View> 
    ); 
} 
 
function AbasScreen() { 
    return ( 
        
            <ModalTabsNavigator/>
        
    ); 
} 

function ScrollScreen() { 
    return ( 
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
            <Text>Navegação por abas</Text> 
        </View> 
    ); 
} 

export default function App() { 
    return ( 
        <NavigationContainer> 
            <Drawer.Navigator> 
                <Drawer.Screen name="Home" component={HomeScreen} /> 
                <Drawer.Screen name="Navegação" component={AbasScreen} /> 
                <Drawer.Screen name="Scroll" component={ScrollScreen} /> 
            </Drawer.Navigator> 
        </NavigationContainer> 
    ); 
} 