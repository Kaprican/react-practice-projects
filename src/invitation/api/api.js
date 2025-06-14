const params = {
    headers: {
        'x-api-key': 'reqres-free-v1'
    }
}

export function getUsers() {
    return fetch('https://reqres.in/api/users', params)
        .then((response) => response.json());
}

export function sendInvitations(users) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({
            'status': 200,
            'statusText': '',
            'ok': true
        }), 1000);
    })
}
