import React, { useMemo, useState } from "react";

const initialInterviews = [
  { id: 1, student: "John Doe", company: "Google", date: "2024-01-20", time: "10:00" },
  { id: 2, student: "Jane Smith", company: "Microsoft", date: "2024-01-22", time: "14:00" },
];

const InterviewScheduling = () => {
  const [interviews, setInterviews] = useState(initialInterviews);
  const [form, setForm] = useState({ student: "", company: "", date: "", time: "" });
  const [errors, setErrors] = useState({});
  const [query, setQuery] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editTime, setEditTime] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return interviews;
    return interviews.filter(
      (i) =>
        i.student.toLowerCase().includes(q) ||
        i.company.toLowerCase().includes(q) ||
        i.date.includes(q)
    );
  }, [interviews, query]);

  const validate = () => {
    const e = {};
    if (!form.student.trim()) e.student = "Student name is required";
    if (!form.company.trim()) e.company = "Company is required";
    if (!form.date) e.date = "Date is required";
    if (!form.time) e.time = "Time is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const nextId = interviews.length ? Math.max(...interviews.map((i) => i.id)) + 1 : 1;
    setInterviews((prev) => [{ id: nextId, ...form }, ...prev]);
    setForm({ student: "", company: "", date: "", time: "" });
    setErrors({});
  };

  const startReschedule = (id, currentTime) => {
    setEditingId(id);
    setEditTime(currentTime);
  };
  const saveReschedule = (id) => {
    if (!editTime) return;
    setInterviews((prev) => prev.map((i) => (i.id === id ? { ...i, time: editTime } : i)));
    setEditingId(null);
    setEditTime("");
  };
  const cancelReschedule = () => {
    setEditingId(null);
    setEditTime("");
  };
  const handleCancel = (id) => {
    if (!window.confirm("Cancel this interview?")) return;
    setInterviews((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div className="space-y-8">
      {/* Card 1: Add Interview */}
      <section className="bg-white rounded-xl shadow border border-gray-100">
        <header className="px-6 py-5">
          <h2 className="text-xl font-semibold">Add Interview</h2>
          <p className="text-sm text-gray-600">Schedule a new interview with a student and employer.</p>
        </header>
        <div className="border-t border-gray-100" />
        <div className="p-6">
          <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Student</label>
              <input
                type="text"
                value={form.student}
                onChange={(e) => setForm((f) => ({ ...f, student: e.target.value }))}
                className={`mt-1 w-full rounded-md border px-3 py-2 outline-none ${
                  errors.student ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-indigo-400"
                }`}
                placeholder="e.g., John Doe"
              />
              {errors.student && <p className="text-sm text-red-600 mt-1">{errors.student}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                className={`mt-1 w-full rounded-md border px-3 py-2 outline-none ${
                  errors.company ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-indigo-400"
                }`}
                placeholder="e.g., Google"
              />
              {errors.company && <p className="text-sm text-red-600 mt-1">{errors.company}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                className={`mt-1 w-full rounded-md border px-3 py-2 outline-none ${
                  errors.date ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-indigo-400"
                }`}
              />
              {errors.date && <p className="text-sm text-red-600 mt-1">{errors.date}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Time</label>
              <input
                type="time"
                value={form.time}
                onChange={(e) => setForm((f) => ({ ...f, time: e.target.value }))}
                className={`mt-1 w-full rounded-md border px-3 py-2 outline-none ${
                  errors.time ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-indigo-400"
                }`}
              />
              {errors.time && <p className="text-sm text-red-600 mt-1">{errors.time}</p>}
            </div>

            <div className="md:col-span-5 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-4 py-2 font-semibold hover:bg-indigo-700 transition"
              >
                Add Interview
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Card 2: Interviews List */}
      <section className="bg-white rounded-xl shadow border border-gray-100">
        <header className="px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Interviews</h2>
              <p className="text-sm text-gray-600">Search, reschedule, or cancel upcoming interviews.</p>
            </div>
            <div className="w-full max-w-xs">
              <input
                type="search"
                placeholder="Search by student, company, or date..."
                className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search interviews"
              />
            </div>
          </div>
        </header>
        <div className="border-t border-gray-100" />
        <div className="p-6">
          <div className="overflow-auto rounded-lg border border-gray-200">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100 sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">Student</th>
                  <th className="px-4 py-2 text-left">Company</th>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Time</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-10 text-center text-gray-500">
                      No interviews found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((row, idx) => (
                    <tr key={row.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-2">{row.id}</td>
                      <td className="px-4 py-2">{row.student}</td>
                      <td className="px-4 py-2">{row.company}</td>
                      <td className="px-4 py-2">{row.date}</td>
                      <td className="px-4 py-2">
                        {/* Inline reschedule control */}
                        {editingId === row.id ? (
                          <div className="flex items-center gap-2">
                            <input
                              type="time"
                              value={editTime}
                              onChange={(e) => setEditTime(e.target.value)}
                              className="w-28 rounded-md border border-gray-300 px-2 py-1 outline-none focus:border-indigo-400"
                            />
                            <button onClick={() => saveReschedule(row.id)} className="text-green-600 hover:text-green-800 font-medium">
                              Save
                            </button>
                            <button onClick={cancelReschedule} className="text-gray-600 hover:text-gray-800 font-medium">
                              Cancel
                            </button>
                          </div>
                        ) : (
                          row.time
                        )}
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex items-center gap-3">
                          {editingId === row.id ? null : (
                            <button
                              onClick={() => startReschedule(row.id, row.time)}
                              className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                              Reschedule
                            </button>
                          )}
                          <button
                            onClick={() => handleCancel(row.id)}
                            className="text-red-600 hover:text-red-800 font-medium"
                          >
                            Cancel
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InterviewScheduling;




