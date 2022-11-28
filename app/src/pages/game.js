import React from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Game = () => {
    const [params] = useSearchParams();
    const [roomState, setRoomState] = useState({});

    useEffect(() => {
        const interval = setInterval(async () => {
            const response =  await axios.post('http://localhost:4000/getRoom', {
                roomId: params.get('roomId')
            });
            setRoomState(roomState => ({
                ...roomState,
                ...response.data
            }));
            // console.log(response.data);
        }, 1000);

        return () => clearInterval(interval);
      }, []);

    const handleNewRoundButton = async () => {
        const response = await axios.post('http://localhost:4000/newRound', {
            roomId: params.get('roomId')
        });
        setRoomState(roomState => ({
            ...roomState,
            ...response.data
        }));
    };

    const handleHitButton = async () => {
        const response = await axios.post('http://localhost:4000/hit', {
            playerId : params.get('playerId'),
            roomId: params.get('roomId')
        });
        setRoomState(roomState => ({
            ...roomState,
            ...response.data
        }));
    };

    const handleDoubleButton = async () => {
        const response = await axios.post('http://localhost:4000/double', {
            playerId : params.get('playerId'),
            roomId: params.get('roomId')
        });
        setRoomState(roomState => ({
            ...roomState,
            ...response.data
        }));
    };
    const handleSplitButton = async () => {
        const response = await axios.post('http://localhost:4000/split', {
            playerId : params.get('playerId'),
            roomId: params.get('roomId')
        });
        setRoomState(roomState => ({
            ...roomState,
            ...response.data
        }));
    };
    const handleInsuranceButton = async () => {
        const response = await axios.post('http://localhost:4000/insurance', {
            playerId : params.get('playerId'),
            roomId: params.get('roomId')
        });
        setRoomState(roomState => ({
            ...roomState,
            ...response.data
        }));
    };
    const handleSurrenderButton = async () => {
        const response = await axios.post('http://localhost:4000/surrander', {
            playerId : params.get('playerId'),
            roomId: params.get('roomId')
        });
        setRoomState(roomState => ({
            ...roomState,
            ...response.data
        }));
    };
    const handlePushButton = async () => {
        const response = await axios.post('http://localhost:4000/push', {
            playerId : params.get('playerId'),
            roomId: params.get('roomId')
        });
        setRoomState(roomState => ({
            ...roomState,
            ...response.data
        }));
    };

    function render_dealer_cards(){
        if (Object.keys(roomState).length != 0) {
            if (roomState.dealer.hand.length > 0) {
                return (
                    <div>
                        {
                            roomState.dealer.hand.map((item, index) => {
                                return <img key={index} src={'cards/' + item.name + '.svg'} alt=''></img>
                            })
                        }
                    </div>
                )
            }
        }
    }

    function render_player_cards(){
        if (Object.keys(roomState).length != 0) {
            let playerIndex = roomState.players.findIndex(element => element._id == params.get('playerId'));
            if (roomState.players.length > 0) {
                // console.log(roomState.players[playerIndex].hand);
                if (roomState.players[playerIndex].hand.length > 0) {
                    return (
                        <div>
                            {
                                roomState.players[playerIndex].hand.map((item, index) => {
                                    return <img key={index} src={'cards/' + item.name + '.svg'} alt=''></img>
                                })
                            }
                        </div>
                    )
                }
            }
        }
    }

    function render_players(){
        if (Object.keys(roomState).length != 0) {
            if (roomState.players.length > 0) {
                console.log(roomState);
                return (
                    <div>
                        {
                            roomState.players.map((item, index) => {
                                return <p key={index} >{item.name}</p>
                            })
                        }
                    </div>
                )
            }
        }
    }

    return (
        <div className='game-container'>
            <h1>Game</h1>
            {render_players()}
            <p>Dealer's hand</p>
            <button onClick={handleNewRoundButton} id="hitNewRound">New Round</button>
            {
                render_dealer_cards()
            }
            <p>Player's hand</p>
            {
                render_player_cards()
            }
            <div className='buttons'>
            <button className="btn btn-primary" onClick={handleHitButton} id="hitButton">Hit</button>
            <button className="btn btn-primary" onClick={handleDoubleButton} id="doubleButton">Double</button>
            <button className="btn btn-primary" onClick={handleSplitButton} id="splitButton">Split</button>
            <button className="btn btn-primary" onClick={handleInsuranceButton} id="insuranceButton">Insurance</button>
            <button className="btn btn-primary" onClick={handleSurrenderButton} id="surrenderButton">Surrender</button>
            <button className="btn btn-primary" onClick={handlePushButton} id="pushButton">Push</button>
            </div>
            
        </div>
    );
};

export default Game;
