import React from "react";
import s from "./events.module.scss";
import Link from "next/link";

export default function Events() {

    const events = [
        {
            name: "first club meeting",
            desc: "come learn all about BU Blockchain!",
            date: "09/13/2023",
            action: "rsvp",
            link: "https://lu.ma/vhseoio4"
        },
        {
            name: "Boston Hacks",
            desc: "come learn all about BU Blockchain!",
            date: "10/20/2023",
            action: "rsvp",
            link: "https://bostonhacks.io/"
        }
    ]

    return (
        <div>
            {
                events.map((event) => (
                    <div className={s.event}>
                        <h2>{event.name}</h2>
                        <div className={s.sub}>{event.desc}</div>
                        <div className={s.date}>{event.date}</div>
                        <Link href={event.link}><button>{event.action}</button></Link>
                    </div>
                ))
            }
        </div>
    )
}