import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { SignOutButton } from '@clerk/clerk-react';



const Dashboard = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [resume, setResume] = useState(null);
    const [linkedin, setLinkedin] = useState('');
    const navigate = useNavigate();
    console.log("navigate : ", navigate);


    const handleFileChange = (event) => {
        if (event.target.files) {
            setResume(event.target.files[0]);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically send the data to your server
        console.log({ name, email, resume, linkedin });

        // Redirect to the dashboard after form submission
        navigate('/dashboard2');
    };


    return (
        <div>
            <SignOutButton signOutCallback={() => window.location.href = '/'}>
                <button>Sign Out</button>
            </SignOutButton>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Resume:</label>
                    <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                </div>
                <div>
                    <label>LinkedIn Profile:</label>
                    <input
                        // type="url"
                        type="text"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" style={{ border: '2px solid red', borderRadius: '5px' }}>Continue</button>
            </form>
        </div>
    )
};

export default Dashboard;
