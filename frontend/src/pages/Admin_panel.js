import React, {useState, useEffect} from 'react';
import logo from '../logo.png'
import {Loader} from "../components/shared/Loader";
import {Admin_Navbar} from "../components/shared/admin_navbar";
export function Admin_Panel() {
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');

    useEffect(() => {
      setActiveTab('dashboard');
    }, []);
  
    const handleTabClick = (event) => {
      setActiveTab(event.target.id);
    };
  
    return (
      <section className="bg-gray-50 dark:bg-zinc-900">
      <Admin_Navbar/>
      
      <div className="dark flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      </div>
  </section>
 
    );
}