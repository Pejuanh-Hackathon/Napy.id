async function handleLogin(event) {
    event.preventDefault();  // Prevent the form from submitting traditionally

    const form = event.target;
    const formData = new FormData(form);

    const data = {
        username: formData.get('email'),  // Assuming your FastAPI expects 'username'
        password: formData.get('password')
    };

    try {
        const response = await fetch('http://localhost:8000/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data)
        });

        if (response.ok) {
            const result = await response.json();
            alert(result.message);  // Display a successful login message
            // You might want to redirect the user or do something else here
        } else {
            throw new Error('Failed to log in');
        }
    } catch (error) {
        alert(error.message);
    }
}
