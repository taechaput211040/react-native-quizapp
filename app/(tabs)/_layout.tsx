import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import QuizScreen from './index';
import LeaderboardScreen from './LeaderboardScreen';

type RootStackParamList = {
  index: undefined; // No parameters expected for Quiz
  LeaderboardScreen: { score: number }; // Leaderboard expects a 'score' parameter
};

export default function TabLayout() {
  const Stack = createStackNavigator<RootStackParamList>();
  
  return (
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen name="index" component={QuizScreen} />
        <Stack.Screen name="LeaderboardScreen" component={LeaderboardScreen} />
      </Stack.Navigator>
  );
}