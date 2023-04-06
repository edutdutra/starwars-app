import {createNativeStackNavigator, NativeStackNavigationProp} from "@react-navigation/native-stack"

import {Home} from "../screens/Home";
import {Planets} from "../screens/Planets";
import {People} from "../screens/People";
import {Starships} from "../screens/Starships";


type AppRoutes = {
    home: undefined;
    planets: undefined;
    people: undefined;
    starships: { urls: string[], peopleName: string};
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>

const {Navigator, Screen} = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
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
            <Screen
                name="starships"
                component={Starships}
            />
        </Navigator>
    )
}