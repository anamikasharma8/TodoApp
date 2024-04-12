import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetAllTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('https://todoapp-kyts.onrender.com/api/admin/getAllTasks')
            .then((response) => {
                setTasks(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching tasks:', error);
            });
    }, []);

    return (
        <div className='mx-20'>
            <table className='w-full border-collapse border border-gray-300'>
                <thead>
                    <tr className='bg-gray-200'>
                        <th className='border border-gray-300 px-4 py-2'>Title</th>
                        <th className='border border-gray-300 px-4 py-2'>Description</th>
                        <th className='border border-gray-300 px-4 py-2'>Created By</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.title} className='bg-white'>
                            <td className='border border-gray-300 px-4 py-2'>{task.title}</td>
                            <td className='border border-gray-300 px-4 py-2'>{task.description}</td>
                            <td className='border border-gray-300 px-4 py-2'>{task.createdBy}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GetAllTasks;
