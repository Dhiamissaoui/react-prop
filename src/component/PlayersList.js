import React from 'react';
import Player from '../Player';
import players from '../players';

const PlayersList = () => {
    return (
        <div>
            <h1 className="text-center mb-5" style={{
                color: '#1976d2',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                fontSize: '3rem',
                marginBottom: '40px'
            }}>
                ⚽ Football Stars ⚽
            </h1>
            <div className="row g-4">
                {players.map((player, index) => (
                    <Player
                        key={index}
                        {...player}
                    />
                ))}
            </div>
        </div>
    );
};

export default PlayersList;
