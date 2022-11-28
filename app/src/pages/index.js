import {React, useState} from 'react';
import axios from 'axios';
import {renderMatches, useNavigate} from 'react-router-dom';
import './index.css';


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

        let params = new URLSearchParams();
        let player = response.data.players.pop();
        params.append("playerId", player._id);
        params.append("roomId", response.data._id);
        if(response.status === 200){
            console.log(response.data);
            navigate('/game?' + params.toString());
        } else {
            console.log("User or room creation failed");
        }
    };

    async function handleRoomButton() {
        console.log("roomButton pressed")
        const response = await axios.post('http://localhost:4000/room', {
            username: username
        });

        let params = new URLSearchParams();
        let player = response.data.players.pop();
        params.append("playerId", player._id);
        params.append("roomId", response.data._id);
        if(response.status === 200){
            navigate('/game?' + params.toString());
        } else {
            console.log("User creation or room selection failed")
        }   
        
    };
    
    return (
        <div className="index-form-container">
        <form className="index-form">
          <div className="index-form-content">
            <h3 className="index-form-title">Play Blackjack!</h3>
            <div className="form-group mt-3">
              <label>Please enter your username! </label>
              <input
                type="text"
                className="form-control mt-1"
                onChange={handleChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="button"  className="btn btn-primary" onClick={handleNewRoom} id="newRoomButton">
                Create new room
              </button>
              <button type="button" className="btn btn-primary" button onClick={handleRoomButton} id="roomButton">
                Join room
              </button>
            </div>
          </div>
        </form>
        </div>
      
    );
};

export default Index;
