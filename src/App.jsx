import React, { useState } from 'react';
import Timeline from './components/Timeline';

const App = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newMsg, setNewMsg] = useState('');
  const [chirps, setChirps] = useState([
    {
      username: 'gatorsfan-40',
      message: 'I love that team',
    },
    {
      username: 'bingcrosbyfan-3000',
      message: 'That teams not as good as my man Bing',
    },
    {
      username: 'bigchillin-guy',
      message: 'Sometimes its good to just realx',
    },
  ]);

  let submitChirp = () => {
    let newChirp = {
        username: newUsername,
        message: newMsg
    }

      setChirps([...chirps, newChirp])
      emptyInputs()
  }

  let emptyInputs = () => {
      setNewUsername('')
      setNewMsg('')
  }

  let myChirps = chirps.map((chirp, id) => <Timeline key={id} chirp={chirp}/>);

  return (
    <>
      <div className="row m-4">
        <h1>Chirpr</h1>
        <div className="col-2">
          <input type="text" id="un-input" value={newUsername} placeholder="Username" onChange={(e) => setNewUsername(e.target.value)}></input>
        </div>
        <div className="col-2">
          <input type="text" id="msg-input"  value={newMsg} placeholder="What's on your mind?" onChange={(e) => setNewMsg(e.target.value)}></input>
        </div>
        <div className="col-2">
            <button className="btn btn-primary" onClick={submitChirp}>Submit chirp</button>
        </div>
      </div>

      {myChirps}
    </>
  );
};

export default App;
