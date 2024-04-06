import React from 'react';

export default function MonthlyEarning() {
  const handleExport = () => {
    const table = document.querySelector('table');
    const rows = table.querySelectorAll('tr');

    let csvContent = "Date,Amount,Description\n";

    rows.forEach(row => {
      const rowData = Array.from(row.querySelectorAll('td')).map(cell => cell.textContent);
      csvContent += rowData.join(",") + "\n";
    });

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'monthly_earnings.csv');
    document.body.appendChild(link);
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Monthly Earnings</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={handleExport}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Export CSV
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="border px-6 py-4">April 10, 2023</td>
                <td className="border px-6 py-4">₹1000</td>
                <td className="border px-6 py-4">Trip Complete</td>
              </tr>
              <tr>
                <td className="border px-6 py-4">April 15, 2023</td>
                <td className="border px-6 py-4">₹1000</td>
                <td className="border px-6 py-4">Trip Complete</td>
              </tr>
              <tr>
                <td className="border px-6 py-4">April 16, 2023</td>
                <td className="border px-6 py-4">₹1000</td>
                <td className="border px-6 py-4">Trip Complete</td>
              </tr>
              <tr>
                <td className="border px-6 py-4">April 17, 2023</td>
                <td className="border px-6 py-4">₹1000</td>
                <td className="border px-6 py-4">Trip Complete</td>
              </tr>
              {/* More rows can be added here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
