import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
interface ScoreItem {
    user: string;
    score: number;
}

export function LeaderScoreboard() {
    const [boardscorelist, setboardScoreList] = useState<ScoreItem[]>([]);
    const route = useRoute();
    useEffect(() => {
        const fetchStorage = async () => {
            let score = await AsyncStorage.getItem('boardscore');
            if (score) {
                let parseboard: ScoreItem[] = JSON.parse(score);
                parseboard = parseboard.sort((a, b) => b.score - a.score);
                console.log(parseboard, 'scoreStorage');
                setboardScoreList(parseboard);
            }
        }
        fetchStorage();
    }, []);
    const currentuser = route.params?.user;
    return (<>
        {
            boardscorelist.length > 0 ? <View style={styles.container}>
                <Text style={styles.title}>Leaderboard</Text>
                <View style={styles.leaderboard}>
                    {boardscorelist.map((item, index) => (
                        <View key={index} style={item.user == currentuser ? styles.rowActive : styles.row}>
                            <Text style={styles.userText}>{index + 1}: {item.user} {item.user == currentuser ? '(you)' : ''}</Text>
                            <Text style={styles.scoreText}>{item.score}</Text>
                        </View>
                    ))}
                </View>
            </View> : null
        }</>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    leaderboard: {
        width: '100vw',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'rgb(193 193 193)',
        marginBottom: 5,
    },
    rowActive: {
        backgroundColor: 'rgb(227 47 47)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 5,
    },
    userText: {
        fontSize: 16,
    },
    scoreText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});