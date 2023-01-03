import React, {useState, useEffect} from 'react';
import logo from '../logo.png'
import {Loader} from "../components/shared/Loader";
import {Navbar} from "../components/shared/Navbar";
export function Admin_Panel() {
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
        
<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Our products
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Username
              </th>
                <th scope="col" class="py-3 px-6">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class=" py-4 px-6 font-medium text-gray-900 dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="py-4 px-6 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

    );
}