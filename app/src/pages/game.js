import React from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Game = () => {
    const [params] = useSearchParams()
    
    async function handleHitButton () {
        console.log("hitButton pressed");
        
        const response = await axios.post('http://localhost:4000/hit', {
            playerId : params.get('playerId'),
            roomId: params.get('roomId')
        });
    };
    const handleDoubleButton = () => {
        console.log("doubleButton pressed")
    };
    const handleSplitButton = () => {
        console.log("splitButton pressed")
    };
    const handleInsuranceButton = () => {
        console.log("insuranceButton pressed")
    };
    const handleSurrenderButton = () => {
        console.log("surrenderButton pressed")
    };
    const handlePushButton = () => {
        console.log("pushButton pressed")
    };

    return (
        <div>
            <h1>Game</h1>
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
