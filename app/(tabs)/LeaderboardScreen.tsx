import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { router } from 'expo-router';
import { LeaderScoreboard } from '@/components/LeaderScore';
type RootStackParamList = {
  LeaderboardScreen: { score: number };
};
type LeaderboardScreenProps = {
  route: RouteProp<RootStackParamList, 'LeaderboardScreen'>;
};
const backtoTest = () => {
  router.push('/')
}
const LeaderboardScreen: React.FC<LeaderboardScreenProps> = ({ route }) => {
  const { score } = route.params;
  return (<>
    <View style={styles.container}>
      <h1>Leader Board</h1>
      <Text style={styles.scoreText}>Your Score: {score}</Text>

      <LeaderScoreboard></LeaderScoreboard>
      <Pressable style={styles.button} onPress={() => backtoTest()}>
        <Text style={styles.textbtn}>back to test</Text>
      </Pressable>
    </View>


  </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scoreText: {
    color: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    borderRadius: 10
  },
  button: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: 'grey',
  },
  textbtn: {
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default LeaderboardScreen;
