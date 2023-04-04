import {createNativeStackNavigator} from "@react-navigation/native-stack"

import {Home} from "../screens/Home";
import {Planets} from "../screens/Planets";
import {People} from "../screens/People";

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false}} >
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="planets"
                component={Planets}
            />
            <Screen
                name="people"
                component={People}
            />
        </Navigator>
    )
}