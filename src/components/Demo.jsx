import React from 'react';
import projectDemo from './IT-HUB.mp4';
import './style.css';

const Demo = () => {
    return (
        <div className='demo1'>
            <div className='ratio16x9'>
                <div className='ratio'>
                    <video className='video-element' autoPlay loop muted controls>
                        <source src={projectDemo} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
}

export default Demo;
