import { getDatabase, ref, onValue, set } from "firebase/database";

const db = getDatabase();

// Function to listen for users in the database
export const listenForUsers = (callback: (data: any) => void) => {
  const usersRef = ref(db, "users/");
  const unsubscribe = onValue(usersRef, (snapshot) => {
    const data = snapshot.val();
    callback(data); // Call the callback with the data
  });

  return unsubscribe; // Return the unsubscribe function
};

// Function to write user data
export const writeUserData = (userId: string, name: string, email: string) => {
  set(ref(db, "users/" + userId), {
    name: name,
    email: email,
  });
};
