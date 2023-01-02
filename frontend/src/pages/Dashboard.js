import React, { useState, useEffect } from 'react';
import logo from '../logo.png'
import { Loader } from "../components/shared/Loader";
import { Navbar } from "../components/shared/Navbar";
import { RateRow } from "../components/Dashboard/RateRow";
export function Dashboard() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        loading ? (<Loader />) :
            (
                <div>
                    <Navbar />
                    <section className="bg-gray-50 dark:bg-zinc-900">
                        <div
                            className="dark flex flex-row gap-48 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <div
                                className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-zinc-700 dark:border-pink-800">
                                <h1 className="mb-2 text-7xl font-bold tracking-tight text-gray-900 dark:text-white">Abortion
                                    should be legal</h1>
                                <div className="flex space-x-40 py-24 ">
                                    <button type="button"
                                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">red
                                    </button>
                                    <button type="button"
                                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Red
                                    </button>
                                </div>
                            </div>


                            <div className="overflow-x-auto border rounded relative dark:border-pink-800">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead
                                        className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-zinc-800 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="py-3 px-6">
                                                Agree
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                Disagree
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className>
                                        <tr className="bg-white border-b dark:bg-zinc-700 dark:border-gray-700">
                                            <td scope="row"
                                                className="py-4 px-6 font-medium text-gray-900 dark:text-white" >


                                                There are also economic arguments in favor of legal abortion. Unplanned pregnancies
                                                can have significant financial consequences for women, particularly if they are not
                                                able to afford to raise a child. Allowing women to have the option of abortion can
                                                help to ensure that they are able to plan for their futures and make the best
                                                decisions for themselves and their families in regards to their economic stability.
                                               <RateRow />
                                            
                                            </td>
                                            <td className="py-4 px-6 font-medium dark:text-white">
                                                abortion is that it can have negative physical and emotional consequences for the
                                                woman who undergoes the procedure. Some people argue that abortion can lead to
                                                physical complications such as infection, bleeding, and damage to the reproductive
                                                organs, as well as emotional problems such as guilt, anxiety, and depression.
                                                <RateRow />
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-zinc-700 dark:border-gray-700">
                                            <th scope="row"
                                                className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                                                There are also economic arguments in favor of legal abortion. Unplanned pregnancies
                                                can have significant financial consequences for women, particularly if they are not
                                                able to afford to raise a child. Allowing women to have the option of abortion can
                                                help to ensure that they are able to plan for their futures and make the best
                                                decisions for themselves and their families in regards to their economic stability.
                                                <RateRow />
                                            </th>
                                            <td className="py-4 px-6">
                                                There are also economic arguments in favor of legal abortion. Unplanned pregnancies
                                                can have significant financial consequences for women, particularly if they are not
                                                able to afford to raise a child. Allowing women to have the option of abortion can
                                                help to ensure that they are able to plan for their futures and make the best
                                                decisions for themselves and their families in regards to their economic stability.
                                                <RateRow />
                                            </td>
                                        </tr>
                                        <tr className="bg-white dark:bg-zinc-700">
                                            <th scope="row"
                                                className="py-4 px-6 font-medium text-gray-900  dark:text-white">
                                                There are also economic arguments in favor of legal abortion. Unplanned pregnancies
                                                can have significant financial consequences for women, particularly if they are not
                                                able to afford to raise a child. Allowing women to have the option of abortion can
                                                help to ensure that they are able to plan for their futures and make the best
                                                decisions for themselves and their families in regards to their economic stability.
                                                <RateRow />
                                            </th>
                                            <td className="py-4 px-6">
                                                There are also economic arguments in favor of legal abortion. Unplanned pregnancies
                                                can have significant financial consequences for women, particularly if they are not
                                                able to afford to raise a child. Allowing women to have the option of abortion can
                                                help to ensure that they are able to plan for their futures and make the best
                                                decisions for themselves and their families in regards to their economic stability.
                                                <RateRow />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            )
    );
}
