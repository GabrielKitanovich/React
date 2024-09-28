import React from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
    return (
        <>
            <TwitterFollowCard userName="kikobeats">
                Cristina
            </TwitterFollowCard>
            <TwitterFollowCard  userName="johndoe">
                John Doe
            </TwitterFollowCard>
            <TwitterFollowCard >
                Jane Smith
            </TwitterFollowCard>
        </>
    );
}