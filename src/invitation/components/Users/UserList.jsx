import React, {useEffect, useState} from 'react';
import {Skeleton} from './Skeleton';
import {User} from './User';
import {Search} from "../Search/Search";
import {getUsers, sendInvitations} from "../../api/api";
import {UserStore} from "../../store/userStore";
import "./users.scss";

const userStore = new UserStore();

export const UserList = ({setSent, setInvitationCounter}) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [invitedUsers, setInvitedUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then((res) => {
                userStore.users = res.data;
                setUsers(res.data);
                setLoading(false);
            })
    }, []);

    const onSent = () => {
        setLoading(true);
        const invitedUsers = userStore.invitedUsers;

        sendInvitations(invitedUsers)
            .then(() => {
                setInvitationCounter(invitedUsers.length);
                setSent(true);
            })
            .finally(() => setLoading(false))
    }

    const createUser = (users) => {
        const onPlusClick = (item) => {
            userStore.updateInvitedList(item);
            const invitedUsers = userStore.invitedUsers;
            setInvitedUsers(invitedUsers);
        }

        return users.map((item) => {
            const isInvited = invitedUsers.map((user) => user.id).includes(item.id);

            return (
                <User
                    {...item}
                    key={item.id}
                    onClick={() => onPlusClick(item)}
                    isInvited={isInvited}
                />
            )
        })
    }

    return (
        <>
            <Search users={userStore.users} setUsers={setUsers}/>
            {isLoading ? (
                <div className="skeleton-list">
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                </div>
            ) : (
                <ul className="users-list">
                    {createUser(users)}
                </ul>
            )}
            <button className="send-invite-btn" onClick={onSent}>Отправить приглашение</button>
        </>
    );
};
