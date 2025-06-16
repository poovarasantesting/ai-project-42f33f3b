import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { LogOut, User, Bell, Settings } from "lucide-react";

type StatCard = {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
};

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [statCards, setStatCards] = useState<StatCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading some dashboard data
    const timer = setTimeout(() => {
      setStatCards([
        {
          title: "Total Revenue",
          value: "$45,231.89",
          change: "+20.1%",
          isPositive: true
        },
        {
          title: "Active Users",
          value: "2,338",
          change: "+15.3%",
          isPositive: true
        },
        {
          title: "Conversion Rate",
          value: "3.65%",
          change: "-0.82%",
          isPositive: false
        },
        {
          title: "New Accounts",
          value: "432",
          change: "+12.4%",
          isPositive: true
        }
      ]);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="rounded-full bg-gray-100 p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-600"
            >
              <Bell size={20} />
            </button>
            <button
              type="button"
              className="rounded-full bg-gray-100 p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-600"
            >
              <Settings size={20} />
            </button>
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <User size={18} />
              </div>
              <span className="text-sm font-medium text-gray-700">{user.name}</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-700 hover:bg-gray-200"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Welcome back, {user.name}!</h2>
          <p className="text-gray-600">Here's what's happening with your account today.</p>
        </div>
        
        {/* Stat cards */}
        {isLoading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-36 animate-pulse rounded-lg bg-gray-200"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {statCards.map((card, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow"
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="text-sm font-medium text-gray-500">{card.title}</div>
                  <div className="mt-1 flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{card.value}</div>
                    <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                      card.isPositive ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {card.change}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Recent activity */}
        <div className="mt-10">
          <h3 className="mb-4 text-lg font-medium text-gray-900">Recent Activity</h3>
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6">
              <div className="divide-y divide-gray-200">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <div key={i} className="py-4">
                      <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200"></div>
                      <div className="mt-2 h-4 w-1/2 animate-pulse rounded bg-gray-200"></div>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">New subscription activated</p>
                          <p className="text-sm text-gray-500">Premium plan - $29.99/month</p>
                        </div>
                        <span className="text-sm text-gray-500">2 hours ago</span>
                      </div>
                    </div>
                    <div className="py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Profile updated</p>
                          <p className="text-sm text-gray-500">You changed your profile information</p>
                        </div>
                        <span className="text-sm text-gray-500">1 day ago</span>
                      </div>
                    </div>
                    <div className="py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Account created</p>
                          <p className="text-sm text-gray-500">Welcome to the platform!</p>
                        </div>
                        <span className="text-sm text-gray-500">3 days ago</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}