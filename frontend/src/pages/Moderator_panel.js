import React, {useState, useEffect} from 'react';
import logo from '../logo.png'
import {Loader} from "../components/shared/Loader";
import {Moderator_Navbar} from "../components/shared/moderator_navbar";
export function Moderator_Panel() {
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
        
      <section className="bg-gray-50 dark:bg-zinc-900">
      <Moderator_Navbar/>
      
      <div className="dark flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      </div>
  </section>
    );
}