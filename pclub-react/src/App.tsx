import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './assets/particlesConfig.json';
import './assets/stylesheets/App.css';

export default function App() {
    return (
        <div className="container">
            <Particles params={particlesConfig} className="app-particles" />
            <div className="textOverlay">
                <h1 style={{ color: '#c5c6c7' }}>BOV Programming Club</h1>
            </div>
        </div>
    );
}
