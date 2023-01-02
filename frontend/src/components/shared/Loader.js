import React from "react";
import donut from '../../donut.gif'

export function Loader() {
    return(
        <section className="bg-gray-50 dark:bg-zinc-900 flex items-center justify-center h-screen">
        <img src={donut} alt="loading..." />
        </section>

    )
}
