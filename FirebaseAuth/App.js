import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}
function AboutScreen() {
  return (
    <View>
      <Text>About Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <NavigationContainer>
    //  <Stack.Navigator>
    //     {/*Define our routes*/}
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="About" component={AboutScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Text>hello</Text>
  );
}
