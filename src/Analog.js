import React from 'react';
import "./analog.scss";

export default ({time}) => {

    const seconds = Number(time.format('s') / 60);
    const minutes = Number(time.format('m') / 60);
    const hours = Number(time.format('h')) / 12;
    const second = `rotate(${(360 * seconds)})`;
    const minute = `rotate(${(360 * minutes)})`;
    const hour = `rotate(${360 * hours})`;

    const y1 = 440;
    const size = 10;

    return (
        <div className="Analog">
            <div className="square">
                <svg viewBox="0 0 1200 1200">
                    <g transform="translate(600, 600)">

                        <circle className="clock-face" r="480"> </circle>

                        { new Array(12).fill('').map((_, index) => {
                            const rotation = `rotate(${(index + 1) * 360 / 12})`;
                            const x = index < 9?-20:-45;
                            return <text key={index} className="hours" x={x} y="-350" transform={rotation}>{index + 1}</text>
                        })}

                        { new Array(60).fill('').map((_, index) => {
                            const rotation = `rotate(${index * 360 / 60})`;
                            return <line key={index} className="minutes-indicator" y1={y1} y2={y1 + size} transform={rotation} > </line>
                        })}

                        { new Array(12).fill('').map((_, index) => {
                            const rotation = `rotate(${index * 360 / 12})`;
                            return <line key={index} className="hours-indicator" y1={y1} y2={y1 + size}  transform={rotation}> </line>
                        })}

                        <line className="hour-hand" y1="10" y2="-250" transform={hour}> </line>

                        <line className="minute-hand" y1="10" y2="-320" transform={minute}> </line>

                        <g transform={second}>
                            <line className="second-hand" y1="100" y2="-380"> </line>
                            <line className="second-hand-counterweight" y1="100" y2="20"> </line>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
};


