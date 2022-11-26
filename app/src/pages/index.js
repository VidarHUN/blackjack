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
        console.log("newRoomButton pressed")
        const response = await axios.post('http://localhost:4000/newRoom', {
            username: username
        });
        
        const params = new URLSearchParams();
        params.append("playerId", response.data.player)
        params.append("roomId", response.data.room)
        if(response.status == 200){
            console.log(response.data)
            navigate('/game?' + params.toString());
        } else {
            console.log("User or room creation failed")
        }      
    };

    async function handleRoomButton() {
        console.log("roomButton pressed")
        const response = await axios.post('http://localhost:4000/room', {
            username: username
        });

        if(response.status === 200){
            
            navigate('/game');
        } else {
            console.log("User creation or room selection failed")
        }   
        
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
