import React, {useState, useEffect} from 'react';
import logo from '../logo.png'
import {Loader} from "../components/shared/Loader";
import {Navbar} from "../components/shared/Navbar";
export function Control() {
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('profile');

    const handleTabClick = (event) => {
      setActiveTab(event.target.id);
    }
    useEffect(() => {
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
        }, 2000)
    }, [])

    return(
        
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="mr-2">
          <a
            href="#"
            id="profile"
            aria-current="page"
            className={`inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg ${activeTab === 'profile' ? 'active' : ''} dark:bg-gray-800 dark:text-blue-500`}
            onClick={handleTabClick}
          >
            Topic Panel
          </a>
        </li>
        <li className="mr-2">
          <a
            href="admin"
            id="dashboard"
            className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={handleTabClick}
          >
            Admin Panel
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            id="settings"
            className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={handleTabClick}
          >
            Moderator Panel
          </a>
        </li>
        
       
      </ul>
    );
}