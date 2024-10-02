import React, { useEffect, useState } from "react";
import { writeUserData, listenForUsers } from "../firebase/db";
import { User, Loader2 } from "lucide-react";

interface UserData {
  id: string;
  name: string;
  email: string;
}

const UserComponent: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = listenForUsers((data) => {
      const usersArray: UserData[] = Object.entries(data).map(([id, userData]) => ({
        id,
        ...(userData as Omit<UserData, 'id'>)
      }));
      setUsers(usersArray);
      setLoading(false);
    });

    return () => unsubscribe();
    
    // Example of writing a new user to the database (optional)
    // writeUserData("1", "John Doe", "john@example.com");
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-100 px-4 py-3 border-b">
          <h2 className="text-xl font-semibold flex items-center text-gray-800">
            <User className="mr-2" />
            User Data
          </h2>
        </div>
        <div className="p-4">
          {loading ? (
            <div className="flex justify-center items-center h-32">
              <Loader2 className="animate-spin h-8 w-8 text-gray-500" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserComponent;