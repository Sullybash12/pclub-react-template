import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './assets/particlesConfig.json';
import './assets/stylesheets/App.css';

export default function App() {
    return (
        <div className="container">
            <Particles params={particlesConfig} className="app-particles" />
            <div className="textOverlay">
                <p className="bovText">
                    <strong>BOV Programming Club</strong>
                </p>
                <p className="bovSubtext">
                    The best place to learn programming and talk with others
                    about your cool new programs!
                </p>
            </div>
        </div>
    );
}
