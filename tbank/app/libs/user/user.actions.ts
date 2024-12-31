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
};

export const signIn = async (userData: RegisterUserData): Promise<RegisterResponse> => {
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

export const signUp = async () => {
    try {
        // mutatuion database make fetch
    } catch (error) {
        console.error('Error', error);
        
    }
}