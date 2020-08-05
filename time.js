import React, { Component } from "react";
import logo from "./logo.svg";
import "./Time.css";

const timelineData = [
    {
        text: 'timeline thst keeps track of food orders',
        date: 'August 2 2020',
        category: {
            tag: 'Order recieved',
            color: '#FFDB14'
        },

    },
    {
        text: 'Preparing...',
        date: '',
        category: {
            tag: 'preparing',
            color: '#e17b77'
        },

    },
    {
        text: 'almost there..',
        date: '',
        category: {
            tag: 'Order Complete OTW!',
            color: '#1DA1F2'
        },

    },
    {
        text:
            'Order delivered',
        date: '',
        category: {
            tag: 'Delivered',
            color: '#018f69'
        },

    },

]

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
);

const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

const App = () => <>
    <h1></h1>
    <Timeline />
</>;

export default App;
