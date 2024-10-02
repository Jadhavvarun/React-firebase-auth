import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { User, LogIn, LogOut, UserPlus, Loader } from "lucide-react";

const Home = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/signin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Loader className="w-12 h-12 text-blue-500 animate-spin" />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to My App</h1>
              <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
            </div>
            
            {user ? (
              <div className="text-center">
                <User className="w-16 h-16 mx-auto text-blue-500 mb-2" />
                <h2 className="text-xl text-gray-700">
                  Hello, <span className="font-semibold">{user.displayName || user.email}</span>!
                </h2>
              </div>
            ) : (
              <p className="text-center text-gray-600">Please sign in to continue.</p>
            )}

            <div className="flex flex-col space-y-3">
              {!user ? (
                <>
                  <Link to="/signup" className="w-full">
                    <button className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 ease-in-out flex items-center justify-center">
                      <UserPlus className="w-5 h-5 mr-2" />
                      Sign Up
                    </button>
                  </Link>
                  <Link to="/signin" className="w-full">
                    <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out flex items-center justify-center">
                      <LogIn className="w-5 h-5 mr-2" />
                      Sign In
                    </button>
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 ease-in-out flex items-center justify-center"
                >
                  <LogOut className="w-5 h-5 mr-2" />
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;