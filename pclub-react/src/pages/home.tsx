import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from '../assets/particlesConfig.json';
import '../assets/stylesheets/App.css';

export default function Home() {
    return (
        <div className="container">
            <Particles params={particlesConfig} className="app-particles" />
            <div className="textOverlay">
                <p className="bovText">
                    <strong>Your Org Here</strong>
                </p>
                <p className="bovSubtext">Your slogan / statement</p>
            </div>
        </div>
    );
}
