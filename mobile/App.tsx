import { Background } from './src/components/Background';
import { StatusBar } from 'react-native';
import { Loading } from './src/components/Loading';

import { 
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';
import { Routes } from './src/routes';


// import './src/service/notificationConfigs';
// import { getPushNotificationToken} from './src/service/getPushNotificationToken';
// import { useRef } from 'react';
// import { Subscription } from 'expo-modules-core';


export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })


  // const getNotificationListener      = useRef<Subscription>();
  // const responseNotificationListener = useRef<Subscription>();

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent 
      />

    { fontsLoaded ? <Routes /> : <Loading />}

    </Background>
  );
}
