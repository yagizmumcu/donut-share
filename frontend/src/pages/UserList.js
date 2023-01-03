import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Navbar} from "../components/shared/Navbar";
import './UserList.css'
export function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Make a GET request to the '/users' route to retrieve a list of users
        axios.get('http://localhost:3000/users')
            .then((res) => {
                setUsers(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleDisableUser = (uid) => {
        // Make a POST request to the '/users/:uid/disable' route to disable the user with the specified UID
        axios.post(`http://localhost:3000/users/${uid}/disable`)
            .then(() => {
                // Remove the disabled user from the list
                setUsers(users.filter((user) => user.uid !== uid));
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <Navbar></Navbar>
            <section className="dark:bg-zinc-900">
                <table className="text-sm text-left text-gray-500 dark:text-gray-900 user-list">
                    <thead
                        className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-zinc-900 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            USER MAIL
                        </th>
                        <th scope="col" className="py-3 px-6">
                            ACTION
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.uid} className="bg-white border-b dark:bg-zinc-900 dark:border-gray-700">
                            <td scope="row"
                                className="py-4 px-6 font-medium text-gray-900 dark:text-white" >{user.email}</td>
                            <td>
                                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-500 to-blue-500 group-hover:from-orange-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-orange-200 dark:focus:ring-orange-800 disable-button" onClick={() => handleDisableUser(user.uid)}>Disable</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
        </div>


    );
}
