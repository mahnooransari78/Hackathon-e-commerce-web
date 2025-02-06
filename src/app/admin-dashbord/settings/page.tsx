'use client';
import { ChangeEvent, useState } from 'react';
import Sidebar from '../sidebar/page';
interface Settings {
  siteName: string;
  contactEmail: string;
  paymentGateway: 'Stripe' | 'PayPal';
}

export default function SettingsManagement() {
  // ✅ Step 2: Apply the Type to useState
  const [settings, setSettings] = useState<Settings>({
    siteName: '',
    contactEmail: '',
    paymentGateway: 'Stripe',
  });

  // ✅ Step 3: Strongly Typed handleChange
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveSettings = () => {
    // Placeholder for saving settings to backend
    alert('Settings updated');
  };

  return (
    <div className="flex gap-4">
        <Sidebar />
    <div>
      {/* Header */}
      <header className="bg-gray-100 mb-4 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-blue-900">Site Settings</h1>
            <p className="text-sm text-gray-500">
              Home / Pages / <span className="text-pink-500">Site Settings</span>
            </p>
          </div>
        </header>
      <h1 className="text-2xl font-bold">Site Settings</h1>
      <form className="space-y-4 mt-4">
        <div>
          <label className="block">Site Name</label>
          <input
            type="text"
            name="siteName"
            value={settings.siteName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block">Contact Email</label>
          <input
            type="email"
            name="contactEmail"
            value={settings.contactEmail}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block">Payment Gateway</label>
          <select
            name="paymentGateway"
            value={settings.paymentGateway}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="Stripe">Stripe</option>
            <option value="PayPal">PayPal</option>
          </select>
        </div>
        <button
          type="button"
          onClick={handleSaveSettings}
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
        >
          Save Settings
        </button>
      </form>
    </div>
    </div>
  );
}
