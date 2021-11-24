import * as React from 'react';
import Particles from 'react-tsparticles';

export default function App() {
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <Particles
                params={{
                    fpsLimit: 60,
                    particles: {
                        color: {
                            value: '#000',
                        },
                        links: {
                            enable: true,
                            color: '#000',
                            distance: 150,
                        },
                        move: {
                            enable: true,
                        },
                    },
                }}
            />
        </div>
    );
}
