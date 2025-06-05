"use client";
import React from "react";

function MainComponent() {
  const [waterIntake, setWaterIntake] = useState(0);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Take morning medication", time: "8:00 AM" },
    { id: 2, text: "Drink water", time: "10:00 AM" },
    { id: 3, text: "Log blood pressure", time: "12:00 PM" },
  ]);
  const [mealSuggestions, setMealSuggestions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dietaryPreferences, setDietaryPreferences] = useState([]);
  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);

  useEffect(() => {
    fetchMealSuggestions();
  }, [dietaryPreferences, dietaryRestrictions]);

  const fetchMealSuggestions = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/get-meal-suggestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          preferences: dietaryPreferences,
          restrictions: dietaryRestrictions,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch meal suggestions");
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setMealSuggestions(data.suggestions);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching meal suggestions:", err);
    } finally {
      setLoading(false);
    }
  };

  const addWater = () => {
    if (waterIntake < 8) {
      setWaterIntake((prev) => prev + 1);
    }
  };

  const resetWater = () => {
    setWaterIntake(0);
  };

  return (
    <div className="bg-[#0D111D] min-h-screen p-6 text-[#EFEFED] font-poppins">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl text-[#00FF94] mb-2">
            Kidney Health Dashboard
          </h1>
          <p className="text-[#9C9FA4]">Track your daily health metrics</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#171B26] rounded-lg p-6 border border-[#262A36]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl">Water Intake</h2>
              <span className="text-[#00FF94]">{waterIntake}/8 glasses</span>
            </div>
            <div className="flex gap-2 mb-4">
              {[...Array.from({ length: 8 })].map((_, index) => (
                <div
                  key={index}
                  className={`flex-1 h-32 rounded-t-lg ${
                    index < waterIntake ? "bg-[#00FF94]" : "bg-[#262A36]"
                  } transition-all duration-300`}
                />
              ))}
            </div>
            <div className="flex gap-4">
              <button
                onClick={addWater}
                disabled={waterIntake >= 8}
                className={`flex-1 py-2 px-4 rounded-lg ${
                  waterIntake >= 8
                    ? "bg-[#262A36] text-[#9C9FA4]"
                    : "bg-[#00FF94] text-black hover:bg-[#00CC75]"
                } transition-colors`}
              >
                Add Glass
              </button>
              <button
                onClick={resetWater}
                className="flex-1 py-2 px-4 rounded-lg border border-[#00FF94] text-[#00FF94] hover:bg-[#00FF94] hover:text-black transition-colors"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="bg-[#171B26] rounded-lg p-6 border border-[#262A36]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl">Today's Meal Plan</h2>
              <button
                onClick={fetchMealSuggestions}
                className="text-[#00FF94] hover:text-[#00CC75]"
              >
                <i className="fas fa-sync-alt" />
              </button>
            </div>
            {loading ? (
              <div className="flex justify-center items-center h-48">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00FF94]"></div>
              </div>
            ) : error ? (
              <div className="text-red-500 p-4 text-center">{error}</div>
            ) : mealSuggestions ? (
              <div className="space-y-4">
                {Object.entries(mealSuggestions).map(([meal, details]) => (
                  <div key={meal} className="p-4 bg-[#20242F] rounded-lg">
                    <h3 className="text-[#00FF94] mb-2 capitalize">{meal}</h3>
                    <p className="text-[#9C9FA4]">{details.name}</p>
                    <p className="text-sm text-[#9C9FA4] mt-1">
                      {details.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-[#9C9FA4] p-4">
                Click refresh to get meal suggestions
              </div>
            )}
          </div>

          <div className="bg-[#171B26] rounded-lg p-6 border border-[#262A36]">
            <h2 className="text-xl mb-4">Reminders</h2>
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-center justify-between p-3 bg-[#20242F] rounded-lg"
                >
                  <div>
                    <p className="text-[#EFEFED]">{notification.text}</p>
                    <p className="text-[#9C9FA4] text-sm">
                      {notification.time}
                    </p>
                  </div>
                  <i className="fas fa-bell text-[#00FF94]" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#171B26] rounded-lg p-6 border border-[#262A36] md:col-span-2 lg:col-span-3">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-24 h-24 rounded-full bg-[#20242F] border-2 border-[#00FF94] flex items-center justify-center">
                <i className="fas fa-user text-4xl text-[#00FF94]" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl mb-4">Dietary Preferences</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-[#9C9FA4] mb-2">Preferences</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Vegetarian", "Low-sodium", "Gluten-free"].map(
                        (pref) => (
                          <button
                            key={pref}
                            onClick={() => {
                              setDietaryPreferences((prev) =>
                                prev.includes(pref)
                                  ? prev.filter((p) => p !== pref)
                                  : [...prev, pref]
                              );
                            }}
                            className={`px-3 py-1 rounded-full text-sm ${
                              dietaryPreferences.includes(pref)
                                ? "bg-[#00FF94] text-black"
                                : "bg-[#262A36] text-[#9C9FA4]"
                            }`}
                          >
                            {pref}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#9C9FA4] mb-2">Restrictions</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Dairy", "Nuts", "Seafood"].map((restriction) => (
                        <button
                          key={restriction}
                          onClick={() => {
                            setDietaryRestrictions((prev) =>
                              prev.includes(restriction)
                                ? prev.filter((r) => r !== restriction)
                                : [...prev, restriction]
                            );
                          }}
                          className={`px-3 py-1 rounded-full text-sm ${
                            dietaryRestrictions.includes(restriction)
                              ? "bg-[#00FF94] text-black"
                              : "bg-[#262A36] text-[#9C9FA4]"
                          }`}
                        >
                          {restriction}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;