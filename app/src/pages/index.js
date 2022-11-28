import {React, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
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
        params.append("playerId", response.data.player)
        params.append("roomId", response.data.room)
        if(response.status === 200){
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
    
    
        // <div>
        //     <h1 class="index_h1">Play blackjack with us!</h1>
        //         <form>
        //             <label>
        //                 Enter your username!
        //                 <input type="text" name="username" value={username} onChange={handleChange}/>
        //             </label>
        //         </form>
        //         <button onClick={handleNewRoom} id="newRoomButton">Create a new room</button>
        //         <button onClick={handleRoomButton} id="roomButton">Join room</button>
        // </div>

    return (
        <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Play Blackjack!</h3>
            <div className="form-group mt-3">
              <label>Please enter your username! </label>
              <input
                type="text"
                className="form-control mt-1"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={handleNewRoom} id="newRoomButton" disabled="disabled">
                Create new room
              </button>
              <button type="submit" className="btn btn-primary" button onClick={handleRoomButton} id="roomButton">
                Join room
              </button>
            </div>
          </div>
        </form>
        </div>
      
    );
};

export default Index;
