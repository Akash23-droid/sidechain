import React from 'react';
import { SignOutButton } from '@clerk/clerk-react';


function Dashboard2() {
    return (
        <div>
            <h1>Welcome to your dashboard 2!</h1>
            <SignOutButton signOutCallback={() => window.location.href = '/'}>
                <button>Sign Out</button>
            </SignOutButton>
        </div>
    )
}

export default Dashboard2
