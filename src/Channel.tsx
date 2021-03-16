import React from 'react';
import ChannelPlaceholder from './channel-placeholder.png';

function Channel(props: { label: string, isSelected: boolean, selectChannel: () => void, unselectChannel: () => void, }) {
    const { label, isSelected, selectChannel, unselectChannel } = props;
    return (
        <li>
            <img src={ChannelPlaceholder} alt={label} />
            <div className="channelInfo">
                <input type="checkbox" name="channels" checked={isSelected} onChange={(!isSelected) ? selectChannel : unselectChannel} />
                <span> {label} </span>
            </div>
        </li>
    )
}

export default Channel;
