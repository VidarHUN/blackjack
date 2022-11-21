import {React, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Index = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    const handleChange = event => {
        setUsername(event.target.value);
    };

    async function handleNewRoom() {
        console.log("newRooomButton pressed")
        await axios.post('http://localhost:4000/newRoom', {
            username: username
        });
        // TODO: Check if the room and user creation was correct
        // navigate('/game');
    };

    const handleRoomButton = () => {
        console.log("roomButton pressed")
        // TODO: Check if the room selection and user creation was correct
        // navigate('/game');
    };

    return (
        <div>
            <h1>Play blackjack with us!</h1>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" value={username} onChange={handleChange}/>
                </label>
            </form>
            <button onClick={handleNewRoom} id="newRoomButton">Create a new room</button>
            <button onClick={handleRoomButton} id="roomButton">Join room</button>
        </div>
    );
};

export default Index;
