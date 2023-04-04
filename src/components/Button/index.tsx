import {Text, TouchableOpacity, TouchableOpacityProps} from "react-native";

import {styles} from "./styles";
import {ReactNode} from "react";

type Props = TouchableOpacityProps & {
    title: string,
    children?: ReactNode
}

export function Button({title, children, ...rest}: Props) {
    return (
        <TouchableOpacity
            style={styles.button}
            {...rest}
        >
            {children}
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}