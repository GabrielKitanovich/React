import React from 'react';
import './App.css';

export function App() {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src="https://unavatar.io/kikobeats" alt="La imagen de perfil" />
                <div className='tw-followCard-info' >
                    <strong>Homero</strong>
                    <span
                    className='tw-followCard-infoUserName'>@HomeroSexo</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    <span>Seguir</span>
                </button>
            </aside>
        </article>
    );
}