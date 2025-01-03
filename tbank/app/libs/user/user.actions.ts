"use server";

interface RegisterUserData {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirm: string;
};

interface RegisterResponse {
    message: string;
    jwt: string;
};

export const sigIn = async (userData: RegisterUserData): Promise<RegisterResponse> => {
    const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        console.log("Error from backend:", errorData);
        throw new Error(errorData.error || "Failed to register user");
    }

    return response.json();
};

// Login functionality (sign in)
export const signUp = async (email: string, password: string) => {
    try {
        const response = await fetch('http://localhost:8000/api/signin/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Login failed.');
        }

        const data = await response.json();
        console.log('Login Successful:', data);
        
        if (typeof window !== "undefined") {
            localStorage.setItem('jwt', data.jwt);
        }

        return data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error; // Propagate error to the calling function
    }
};
