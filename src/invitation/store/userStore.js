export class UserStore {
    _users = [];
    _invitedUsers = [];

    get users() {
        return this._users.slice();
    }

    set users(users) {
        this._users = users;
    }

    get invitedUsers() {
        return this._invitedUsers.slice();
    }

    set invitedUsers(users) {
        this._invitedUsers = users;
    }

    addUserToInvitedList(invitedUser) {
        this._invitedUsers.push(invitedUser);
    }

    removeUserFromInvitedList(invitedUser) {
        this._invitedUsers = this._invitedUsers.filter((user) => user.id !== invitedUser.id);
    }

    isUserInvited(invitedUser) {
        const invited = this._invitedUsers;
        return invited.map((user) => user.id).includes(invitedUser.id)
    }

    updateInvitedList(currentUser) {
        if (this.isUserInvited(currentUser)) {
            this.removeUserFromInvitedList(currentUser);
        } else {
            this.addUserToInvitedList(currentUser);
        }
    }
}
