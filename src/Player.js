import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    return (
        <div className="col-md-6 col-lg-3 mb-4">
            <Card
                style={{
                    width: '100%',
                    height: '100%',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease',
                    border: '2px solid #e3f2fd',
                    borderRadius: '15px'
                }}
                className="h-100"
            >
                <Card.Img
                    variant="top"
                    src={imageUrl}
                    style={{
                        height: '250px',
                        objectFit: 'cover',
                        borderTopLeftRadius: '15px',
                        borderTopRightRadius: '15px'
                    }}
                />
                <Card.Body style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px'
                }}>
                    <Card.Title style={{
                        color: '#1976d2',
                        fontWeight: 'bold',
                        fontSize: '1.3rem',
                        marginBottom: '15px'
                    }}>
                        {name}
                    </Card.Title>
                    <Card.Text style={{
                        color: '#424242',
                        lineHeight: '1.8',
                        fontSize: '0.95rem'
                    }}>
                        <div style={{ marginBottom: '8px' }}>
                            <strong style={{ color: '#1565c0' }}>Team:</strong> {team}
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                            <strong style={{ color: '#1565c0' }}>Nationality:</strong> {nationality}
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                            <strong style={{ color: '#1565c0' }}>Jersey #:</strong> {jerseyNumber}
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <strong style={{ color: '#1565c0' }}>Age:</strong> {age} years
                        </div>
                    </Card.Text>
                    <Button
                        variant="primary"
                        style={{
                            backgroundColor: '#1976d2',
                            borderColor: '#1976d2',
                            fontWeight: 'bold',
                            width: '100%',
                            padding: '10px',
                            borderRadius: '8px'
                        }}
                    >
                        View Profile
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

// Default props
Player.defaultProps = {
    name: "Unknown Player",
    team: "Free Agent",
    nationality: "Unknown",
    jerseyNumber: 0,
    age: 0,
    imageUrl: "https://via.placeholder.com/300x400?text=No+Image"
};

export default Player;