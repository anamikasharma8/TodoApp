import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetAllUsers = () => {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        axios.get('https://todoapp-kyts.onrender.com/api/admin/getAllUsers')
            .then((response) => setAllUsers(response.data.data))
            .catch((error) => console.error('Error fetching users:', error));
    }, []);

    return (
        <div className='mx-20'>
            <table className='w-full border-collapse border border-gray-300'>
                <thead>
                    <tr className='bg-gray-200'>
                        <th className='border border-gray-300 px-4 py-2'>Name</th>
                        <th className='border border-gray-300 px-4 py-2'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((user) => (
                        <tr key={user._id} className='bg-white'>
                            <td className='border border-gray-300 px-4 py-2'>{user.name}</td>
                            <td className='border border-gray-300 px-4 py-2'>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GetAllUsers;
