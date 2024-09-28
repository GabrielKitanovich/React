import React from 'react';

export function TwitterFollowCard({ name, userName }) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt={`La imagen de perfil de ${name}`} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
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