import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryProductsScreen from "../screens/CategoryProductsScreen";
import { Colors } from "../constants/colors";
import ProductsDetailScreen from "../screens/ProductsDetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Categorias" screenOptions={{
            headerStyle: { backgroundColor: Colors.secondary },
            headerTintColor: Colors.primary,
            headerTitleStyle: { fontWeight: 'bold' }
        }}>
            <Stack.Screen
                name='Menu'
                component={CategoriesScreen}
                options={{
                    title: 'HP FARMA',
                }} />
            <Stack.Screen
                name='Productos'
                component={CategoryProductsScreen}
                options={({ route }) => ({ title: route.params.name })} />
            <Stack.Screen
                name='Detalle'
                component={ProductsDetailScreen}
                options={({ route }) => ({ title: route.params.name })} />
        </Stack.Navigator>
    )
}