import React , {useState} from 'react';
import classes from './DisappearingCircles.module.css';

import styles from './DisappearingCircles.module.css';

const initialCircles = [
    {
        color: 'red',
        points: 10
    },

    {
        color: 'blue',
        points: 20
    },

    {
        color: 'green',
        points: 40
    },

    {
        color: 'black',
        points: 50
    },

    {
        color: 'orange',
        points: 70
    },

]

function DisappearingCircles(){

    const [points, setPoints] = useState(0);
    const [circles, setCircles]=useState(initialCircles);


function removeCircle(idx){

    setPoints(points + circles[idx].points); //adding to our point count

    function filterCallback(_,i){
        return i !== idx;
    }

    const newCircles = circles
    // .filter((circle,i) => i !== idx); // taking out 
    .filter(filterCallback);
    setCircles(newCircles);
}

function handleReset(){
    setCircles([...initialCircles]);
    setPoints(0)
}
    return(
        <div>
            <p>Points: {points}</p>

            <div className={classes.wrapper}>
            {circles.map((circle,i)=>{
                return (
                    <div 
                        key = {i}
                        onClick={()=> removeCircle(i)}
                        className={styles.circle}
                        style={{background: circle.color}}
                        >
                        {circle.points}

                    </div>
                )
            })}
            </div>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default DisappearingCircles;