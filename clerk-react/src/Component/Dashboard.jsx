import { SignOutButton } from '@clerk/clerk-react';

const Dashboard = () => {
    return (
        <div>
            <h1>Welcome to your dashboard!</h1>
            <SignOutButton signOutCallback={() => window.location.href = '/'}>
                <button>Sign Out</button>
            </SignOutButton>
        </div>
    )
};

export default Dashboard;
