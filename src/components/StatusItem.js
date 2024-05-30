import React from 'react';
import './StatusItem.css';

const StatusItem = ({ status }) => {
    return (
        <div className="status-item" onClick={() => window.open(status.link, "_blank")}>
            <img src={status.image} alt="status" className="status-icon" />
            <p className="status-title">{status.title}</p>
        </div>
    );
};

export default StatusItem;
