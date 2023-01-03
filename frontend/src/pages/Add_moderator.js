import React, { useState } from 'react';
import {initializeApp} from '../firebaseConfig';
import auth from '../firebaseConfig'
import { Link, useNavigate } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";
import logo from "../logo.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import donut from "../donut.gif";
import {Navbar} from "../components/shared/Navbar";

export function Add_moderator(props) {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function handleSubmit(event){
        event.preventDefault();

        if (password !== confirmPassword) {
            toast("Passwords do not match", {theme: "dark"});
        }

        try {

            await register(email,password);
            alert('The moderator is added');
            navigate('/dashboard');

            
        } catch(error) {
            toast(error.message, {theme: "dark"});
        }
    };

    function register(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    return (

        <div>
            <Navbar></Navbar>
            <div>
                <ToastContainer />
                <section className="bg-gray-50 dark:bg-zinc-900">
                    <div className="dark flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div
                            className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-zinc-800 dark:border-zinc-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Add moderator
                                </h1>

                                <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email"


                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Moderator E-mail</label>
                                        <input type="email" name="email" id="email"
                                               onChange={(e) => setEmail(e.target.value)}
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-purple-500"
                                               placeholder="name@company.com" required=""/>
                                    </div>
                                    <div>
                                        <label htmlFor="password"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••"
                                               onChange={(e) => setPassword(e.target.value)}
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-purple-500"
                                               required=""/>
                                    </div>
                                    <div>
                                        <label htmlFor="confirmPassword"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••"
                                               onChange={(e) => setConfirmPassword(e.target.value)}
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-purple-500"
                                               required=""/>
                                    </div>

                                    <button type="submit" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add Moderator</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>


    );
}
