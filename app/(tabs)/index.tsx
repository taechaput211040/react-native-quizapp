import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { getRandomizedQuestions } from '../utils/question';
import { Question, ans } from '../model/question';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
  index: undefined;
  LeaderboardScreen: { user: string, score: number };
};

type QuizScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'index'>;
  route: RouteProp<RootStackParamList, 'index'>;
};

const QuizScreen: React.FC<QuizScreenProps> = ({ navigation }) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [boardScore, setboardScore] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    const randomQuestions = getRandomizedQuestions();
    setQuestions(randomQuestions);
    const fetchStorage = async () => {
      let board = await AsyncStorage.getItem('boardscore')
      if (board) {
        setboardScore(board)
      } else {
        setboardScore('')
      }
    }
    fetchStorage()
  }, []);
  console.log(questions, 'questions')
  const handleAnswer = (selectedAnswer: ans) => {
    if (selectedAnswer?.correct) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      setUser(result)
      let setboard = null
      if (boardScore != '') {
        setboard = JSON.parse(boardScore)
      } else {
        setboard = []
      }
      setboard.push({
        user: result,
        score: score
      })
      AsyncStorage.setItem(
        'boardscore',
        JSON.stringify(setboard),
      );
      navigation.navigate('LeaderboardScreen', { user: result, score: score });
    }
  };

  return (
    <View style={styles.container}>
      {questions.length > 0 && (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {questions[currentQuestionIndex].ask}
          </Text>
          {questions[currentQuestionIndex].ansOption.map((answer, index) => (
            <Pressable key={index} style={styles.button} onPress={() => handleAnswer(answer)}>
              <Text style={styles.text}>{answer.ans}</Text>
            </Pressable>

          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  questionContainer: {
    width: '100%',
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default QuizScreen;
