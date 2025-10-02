// Grupo de abas (privado)
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="home" 
        options={{
          title: 'Home',
          tabBarIcon: () => null,
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{
          title: 'Perfil',
          tabBarIcon: () => null,
        }} 
      />
    </Tabs>
  );
}