import React, {useState} from "react";
import "./search.scss";

export function Search({users, setUsers}) {
    const [searchString, setSearchString] = useState('');

    const onSearch = (value) => {
        const filteredUserList = users.filter((user) => {
            return user.email.toLowerCase().includes(value.toLowerCase())
                || user.first_name.toLowerCase().includes(value.toLowerCase())
                || user.last_name.toLowerCase().includes(value.toLowerCase());
        });

        setSearchString(value);
        setUsers(filteredUserList);
    }

    return (
        <div className="search">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
            </svg>
            <input
                value={searchString}
                type="text"
                placeholder="Найти пользователя..."
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    )
}
