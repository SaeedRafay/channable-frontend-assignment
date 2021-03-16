import React, { useState } from 'react';
import ChannelsList from './channel-list';
import Channel from './Channel';
import Pagination from './Pagination';
import Filters from './Filters';
import './styles/Channels.css';

function Channels() {
    const [pageNum, setPageNum] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [sortByName, setSortByName] = useState<string[]>(["0", "0"]);
    const [selectedChannels, setSelectedChannel] = useState<string[]>([]);

    const selectChannel = (channelKey: string) => {
        setSelectedChannel((channels: string[]) => [...channels, channelKey])
    };

    const unselectChannel = (channelKey: string) => {
        setSelectedChannel(selectedChannels.filter((channel: string) => channel !== channelKey))
    };

    const isChannelSelected = (channelKey: string) => selectedChannels.includes(channelKey);

    const channelsFilter = ChannelsList
        .filter((channel: { label: string, }) => channel.label.toLowerCase().includes(searchTerm))
        .filter((channel: { country: string, }) => channel.country.includes(countryCode))
        .sort((a: { label: string }, b: { label: string }) => (a.label.toLowerCase() > b.label.toLowerCase()) ? Number(sortByName[0]) : Number(sortByName[1]));

    const pageLimit = 15;
    const pageIndex = pageNum - 1;
    const pageStart = pageIndex * pageLimit;
    const pageEnd = pageStart + pageLimit;

    const channelsData = channelsFilter
        .slice(pageStart, pageEnd)
        .map((channel: { key: string, label: string, country: string, }) => {
            return <Channel key={channel.key} label={channel.label} isSelected={isChannelSelected(channel.key)} selectChannel={() => selectChannel(channel.key)} unselectChannel={() => unselectChannel(channel.key)} />
        });

    return (
        <div className="Channels">
            <Filters searchResults={setSearchTerm} filterResults={setCountryCode} sortResults={setSortByName} changePage={setPageNum} />

            <ul className="ChannelsList">
                {channelsData}
            </ul>

            <Pagination pageNum={pageNum} channelsFilter={channelsFilter} changePage={setPageNum} pageLimit={pageLimit} pageStart={pageStart} pageEnd={pageEnd} />
        </div>
    );
}

export default Channels;
