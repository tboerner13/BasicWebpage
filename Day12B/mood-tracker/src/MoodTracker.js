import {useState} from 'react';

export default function MoodTracker(){

    const [mood, setMood] = useState("😊");
    const [desc, setDesc] = useState('')
    const [link, setLink] = useState('')
    const [memory, setMemory] = useState('')

    function beaming(){
        setMood('😁')
        setDesc('I\'m super excited when I get to teach at the middle school.')
        setLink('https://www.youtube.com/watch?v=9x5WY_jmsko')
        setMemory('I was beaming when some of the students at the middle school gave me cookies for Christmas')
    }

    function happy(){
        setMood('😊')
        setDesc('I feel happy when I\'m home')
        setLink('https://www.youtube.com/watch?v=pSw8an1u3rc')
        setMemory('One of my happiest memories is getting to spend a week in Florida with my friends for our senior trip after we graduated high school.')
    }

    function unamused(){
        setMood('😒')
        setDesc('I feel unamused when there is a song that I don\'t like that comes on.')
        setLink('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        setMemory('Many times I have had a movie ruined for me because someone thought it would be funny to tell the whole class major spoilers. Both Star Wars: The Last Jedi, and Avengers Endgame were spoiled for me.')
    }

    function sad(){
        setMood('😢')
        setDesc('I am a little sad every time I move on from a school, but such is life.')
        setLink('https://www.youtube.com/watch?v=-2U0Ivkn2Ds')
        setMemory('It was not easy leaving for Tech for the first time. I missed my friends and family, and the band program was not what I hoped it would be')
    }

    return(
        <div style={{textAlign: 'center', padding: '20px'}}>
            <h1>Mood Tracker</h1>
            <p>Current Mood: {mood} </p>
            <p>Short Description: {desc} </p>
            <a href={link}>{link}</a>
            <p>Story: {memory}</p>

            <button onClick={() => beaming()} style={{margin: '5px', padding: '10px', background: 'lightgray'}}>Beaming</button>

            <button onClick={() => happy()} style={{margin: '5px', padding: '10px', background: 'lightgreen'}}>Happy</button>

            <button onClick={() => unamused()} style={{margin: '5px', padding: '10px', background: 'lightblue'}}>Unamused</button>

            <button onClick={() => sad()} style={{margin: '5px', padding: '10px', background: 'lightcoral'}}>Upset</button>

        </div>
    );
}