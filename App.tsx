import {StatusBar} from 'react-native';
import {Home} from "./src/screens/Home";
import {People} from "./src/screens/People";

export default function App() {
    return (
        <>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <People />
            {/*<Home/>*/}
        </>
    );
}