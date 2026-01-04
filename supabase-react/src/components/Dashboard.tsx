import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">
                Welcome back, <span className="font-medium">{user?.email}</span>
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            >
              Sign out
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
              <h3 className="font-medium text-gray-900">Your Profile</h3>
              <p className="text-sm text-gray-600 mt-1">Manage your account settings</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
              <h3 className="font-medium text-gray-900">Security</h3>
              <p className="text-sm text-gray-600 mt-1">Update your password</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}