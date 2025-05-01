"use client";

import React from "react";

export default function BookingsPage() {
  return (
    <div className="container mx-auto px-5 lg:px-10 mt-8">
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>

      <div className="grid gap-4">
        {/* Placeholder for when we add actual bookings */}
        <div className="p-4 border rounded-lg shadow-sm">
          <p className="text-gray-500">No bookings found.</p>
        </div>
      </div>
    </div>
  );
}
