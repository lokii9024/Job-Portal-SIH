import React, { useMemo, useState } from "react";

const toPct = (part, whole) => (whole ? Math.round((part / whole) * 100) : 0);

const PlacementData = () => {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState({ key: "date", asc: false });

  // Expanded dataset with onCampus flag
  const placements = [
    { id: 1, student: "John Doe", company: "Google", package: "₹25 LPA", date: "2024-01-15", onCampus: true },
    { id: 2, student: "Jane Smith", company: "Microsoft", package: "₹22 LPA", date: "2024-01-10", onCampus: false },
    { id: 3, student: "Aarav Patel", company: "Amazon", package: "₹28 LPA", date: "2024-01-18", onCampus: true },
    { id: 4, student: "Neha Gupta", company: "Adobe", package: "₹20 LPA", date: "2024-02-02", onCampus: false },
    { id: 5, student: "Rahul Verma", company: "Meta", package: "₹30 LPA", date: "2024-02-10", onCampus: true },
    { id: 6, student: "Ishita Roy", company: "Netflix", package: "₹26 LPA", date: "2024-02-12", onCampus: false },
    { id: 7, student: "Karan Singh", company: "Salesforce", package: "₹18 LPA", date: "2024-02-14", onCampus: true },
    { id: 8, student: "Aisha Khan", company: "Uber", package: "₹24 LPA", date: "2024-02-20", onCampus: false },
    { id: 9, student: "Vikram Mehta", company: "Flipkart", package: "₹16 LPA", date: "2024-02-22", onCampus: true },
    { id: 10, student: "Riya Sharma", company: "Paytm", package: "₹14 LPA", date: "2024-02-25", onCampus: true },
  ]; // [web:256]

  // Optional: if total eligible students is known, compute placement rate
  const totalEligible = 150; // example cohort size
  const totalPlaced = placements.length;
  const placementRate = toPct(totalPlaced, totalEligible); // (placed/eligible)*100 [web:247]

  const onCampusCount = placements.filter((p) => p.onCampus).length;
  const offCampusCount = totalPlaced - onCampusCount;
  const onPct = toPct(onCampusCount, totalPlaced);
  const offPct = toPct(offCampusCount, totalPlaced); // [web:247]

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return placements;
    return placements.filter((p) =>
      [p.student, p.company, p.package, p.date, p.onCampus ? "on campus" : "off campus"]
        .some((v) => String(v).toLowerCase().includes(q))
    );
  }, [placements, query]); // [web:215]

  const parseLPA = (text) => {
    const m = String(text).match(/([\d,.]+)/);
    return m ? Number(m[1].replace(/,/g, "")) : 0;
  };

  const sorted = useMemo(() => {
    const arr = [...filtered];
    arr.sort((a, b) => {
      let av, bv;
      switch (sort.key) {
        case "student":
          av = a.student; bv = b.student; return sort.asc ? av.localeCompare(bv) : bv.localeCompare(av);
        case "company":
          av = a.company; bv = b.company; return sort.asc ? av.localeCompare(bv) : bv.localeCompare(av);
        case "package":
          av = parseLPA(a.package); bv = parseLPA(b.package); return sort.asc ? av - bv : bv - av;
        case "date":
        default:
          av = new Date(a.date); bv = new Date(b.date); return sort.asc ? av - bv : bv - av;
      }
    });
    return arr;
  }, [filtered, sort]); // [web:215]

  const totals = useMemo(() => {
    const count = sorted.length;
    const sum = sorted.reduce((acc, p) => acc + parseLPA(p.package), 0);
    return { count, sum };
  }, [sorted]); // [web:215]

  const sortIcon = (key) => (sort.key === key ? (sort.asc ? "↑" : "↓") : "");

  const toggleSort = (key) => {
    setSort((s) => (s.key === key ? { key, asc: !s.asc } : { key, asc: true }));
  };

  const formatLPA = (n) => `₹${n.toLocaleString("en-IN")} LPA`;

  const exportCSV = () => {
    const header = ["ID", "Student", "Company", "Package", "Date", "Type"];
    const rows = sorted.map((p) => [p.id, p.student, p.company, p.package, p.date, p.onCampus ? "On-Campus" : "Off-Campus"]);
    const all = [header, ...rows];
    const csv = all.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `placements_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }; // [web:242][web:240]

  return (
    <div className="space-y-6">
      {/* KPI summary cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total placements */}
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-500">Total Placements</p>
          <p className="text-2xl font-bold text-indigo-700">{totalPlaced}</p>
          <p className="text-xs text-gray-500 mt-1">Out of {totalEligible} eligible</p>
        </div>

        {/* Placement rate */}
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-500">Placement Rate</p>
          <p className="text-2xl font-bold text-emerald-700">{placementRate}%</p>
          <div className="mt-2 h-2 rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full bg-emerald-500" style={{ width: `${placementRate}%` }} />
          </div>
        </div>

        {/* On-campus */}
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-500">On-Campus</p>
          <p className="text-2xl font-bold text-blue-700">{onCampusCount}</p>
          <div className="mt-2 h-2 rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full bg-blue-500" style={{ width: `${onPct}%` }} />
          </div>
          <p className="text-xs text-gray-500 mt-1">{onPct}% of placed</p>
        </div>

        {/* Off-campus */}
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-500">Off-Campus</p>
          <p className="text-2xl font-bold text-amber-700">{offCampusCount}</p>
          <div className="mt-2 h-2 rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full bg-amber-500" style={{ width: `${offPct}%` }} />
          </div>
          <p className="text-xs text-gray-500 mt-1">{offPct}% of placed</p>
        </div>
      </section> {/* [web:143][web:256] */}

      {/* Header controls */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Placement Data</h2>
            <p className="text-sm text-gray-600">Search and sort student placements; export as CSV.</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="search"
              placeholder="Search student, company, package..."
              className="w-full md:w-80 rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search placements"
            />
            <button
              onClick={exportCSV}
              className="rounded-md bg-indigo-600 text-white px-3 py-2 text-sm font-semibold hover:bg-indigo-700 transition"
            >
              Export CSV
            </button>
          </div>
        </div>
      </div> {/* [web:215][web:242] */}

      {/* Table */}
      <div className="overflow-auto rounded-xl border border-gray-200 bg-white shadow">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">
                <button className="inline-flex items-center gap-1 font-semibold" onClick={() => toggleSort("student")}>
                  Student <span className="text-gray-400">{sortIcon("student")}</span>
                </button>
              </th>
              <th className="px-4 py-2 text-left">
                <button className="inline-flex items-center gap-1 font-semibold" onClick={() => toggleSort("company")}>
                  Company <span className="text-gray-400">{sortIcon("company")}</span>
                </button>
              </th>
              <th className="px-4 py-2 text-left">
                <button className="inline-flex items-center gap-1 font-semibold" onClick={() => toggleSort("package")}>
                  Package <span className="text-gray-400">{sortIcon("package")}</span>
                </button>
              </th>
              <th className="px-4 py-2 text-left">
                <button className="inline-flex items-center gap-1 font-semibold" onClick={() => toggleSort("date")}>
                  Date <span className="text-gray-400">{sortIcon("date")}</span>
                </button>
              </th>
              <th className="px-4 py-2 text-left">Type</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sorted.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-10 text-center text-gray-500">No placement records found.</td>
              </tr>
            ) : (
              sorted.map((p, idx) => (
                <tr key={p.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-2">{p.id}</td>
                  <td className="px-4 py-2 font-medium">{p.student}</td>
                  <td className="px-4 py-2">{p.company}</td>
                  <td className="px-4 py-2">{p.package}</td>
                  <td className="px-4 py-2">{p.date}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${p.onCampus ? "bg-blue-100 text-blue-800" : "bg-amber-100 text-amber-800"}`}>
                      {p.onCampus ? "On-Campus" : "Off-Campus"}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div> {/* [web:215][web:97] */}
    </div>
  );
};

export default PlacementData;

