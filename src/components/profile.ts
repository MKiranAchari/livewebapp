export function ProfilePage(data: any) {
    return `
        <div class="page">
            <h1>Your Profile</h1>
            <p>Name: ${data.name}</p>
            <p>Email: ${data.email}</p>
        </div>
    `;
}
