import React from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Game = () => {
    const [params] = useSearchParams();
    const [roomState, setRoomState] = useState({})

    useEffect(() => {
        const interval = setInterval(async () => {
            const response =  await axios.post('http://localhost:4000/getRoom', {
                roomId: params.get('roomId')
            });
            setRoomState(roomState => ({
                ...roomState,
                ...response
            }));
        }, 1000);

        return () => clearInterval(interval);
      }, []);

    const handleHitButton = async () => {
        console.log("hitButton pressed");
        const response = await axios.post('http://localhost:4000/hit', {
            playerId : params.get('playerId'),
            roomId: params.get('roomId')
        });
        setRoomState(roomState => ({
            ...roomState,
            ...response
        }));
    };
    const handleDoubleButton = async () => {
        console.log("doubleButton pressed");
        const response = await axios.post('http://localhost:4000/double', {
            playerId : params.get('playerId'),
            roomId: params.get('roomId')
        });
        setRoomState(roomState => ({
            ...roomState,
            ...response
        }));
    };
    const handleSplitButton = async () => {
        console.log("splitButton pressed");
        const response = await axios.post('http://localhost:4000/split', {
            playerId : params.get('playerId'),
            roomId: params.get('roomId')
        });
        setRoomState(roomState => ({
            ...roomState,
            ...response
        }));
    };
    const handleInsuranceButton = async () => {
        console.log("insuranceButton pressed");
        const response = await axios.post('http://localhost:4000/insurance', {
            playerId : params.get('playerId'),
            roomId: params.get('roomId')
        });
        setRoomState(roomState => ({
            ...roomState,
            ...response
        }));
    };
    const handleSurrenderButton = async () => {
        console.log("surrenderButton pressed");
        const response = await axios.post('http://localhost:4000/surrander', {
            playerId : params.get('playerId'),
            roomId: params.get('roomId')
        });
        setRoomState(roomState => ({
            ...roomState,
            ...response
        }));
    };
    const handlePushButton = async () => {
        console.log("pushButton pressed");
        const response = await axios.post('http://localhost:4000/push', {
            playerId : params.get('playerId'),
            roomId: params.get('roomId')
        });
        setRoomState(roomState => ({
            ...roomState,
            ...response
        }));
    };

    return (
        <div>
            <h1>Game</h1>
            <p>Dealer's hand</p>
            <img src='cards/JC.svg' alt=''/>
            <button onClick={handleHitButton} id="hitButton">Hit</button>
            <button onClick={handleDoubleButton} id="doubleButton">Double</button>
            <button onClick={handleSplitButton} id="splitButton">Split</button>
            <button onClick={handleInsuranceButton} id="insuranceButton">Insurance</button>
            <button onClick={handleSurrenderButton} id="surrenderButton">Surrender</button>
            <button onClick={handlePushButton} id="pushButton">Push</button>
        </div>
    );
};

export default Game;
