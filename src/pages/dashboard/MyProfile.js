import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user ] = useAuthState(auth);
    return (
        <div className='flex items-center justify-center h-screen'>
            <h2 className='text-5xl text-primary'>Pending My Profile</h2>

        </div>
    );
};

export default MyProfile;