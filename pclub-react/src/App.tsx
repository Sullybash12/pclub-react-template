import * as React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './assets/particlesConfig.json';

export default function App() {
    return (
        <div>
            <Particles params={particlesConfig} />
            <h1 style={{ color: '#c5c6c7' }}>BOV Programming Club</h1>
        </div>
    );
}
