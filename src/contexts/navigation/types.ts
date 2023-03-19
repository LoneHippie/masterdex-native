import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
    SearchScreen: undefined;
    PokemonScreen: undefined;
}

export type ScreenNavigationProps = NativeStackNavigationProp<RootStackParamList>