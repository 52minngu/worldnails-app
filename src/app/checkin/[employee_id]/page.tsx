import { services } from "@/lib/services"
import { getEmployeeById } from "@/lib/employees";


function groupByCategory() {
    const map = new Map<string, typeof services>();
    for (const s of services) {
        const arr = map.get(s.category) ?? [];
        arr.push(s);
        map.set(s.category, arr);
    }
    return map;
}

export default async function CheckInPage({
    params,
}: {
    params: Promise<{ employee_id: string }>;
}) {
    const { employee_id } = await params;

    const employee = getEmployeeById(employee_id);
    if (!employee || !employee.active) {
        return (
            <main className="min-h-screen p-6 max-w-xl mx-auto">
                <h1 className="text-2xl font bold">WorldNails Check-In</h1>
                <p className="mt-4 text-gray-700">
                    This station is unavailable. Please ask the front desk for help.
                </p>
            </main>
        );
    }

    const grouped = groupByCategory();

    return (
        <main className="min-h-screen p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold">WorldNails Check-in</h1>
            <p className="mt-2 text-gray-600">
                Checking in with:<span className="font-semibold">{employee.employee_name}</span>
            </p>

            <form className="mt-6 space-y-4">

                <div>
                    <label className="block text-sm font-medium"> Your name</label>
                    <input
                        className="mt-1 w-full rounded-md border p-3"
                        placeholder="e.g., Minh"
                        name="customer_name"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Visit type</label>
                    <select className="mt-1 w-full rounded-md border p-3" name="visit_type">
                        <option value="walkin">Walk-in</option>
                        <option value="appointment">Appointment</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium">Services</label>

                    <div className="mt-2 space-y-2">
                        {Array.from(grouped.entries()).map(([category, list]) => (
                            <details
                                key={category}
                                className="rounded-md border bg-white"
                                open={false}
                            >
                                <summary className="curser-pointer select-none px-3 py-2 font-semibold">
                                    {category} <span className="text-gray-500 front-normal">({list.length})</span>
                                </summary>
                                <div className="px-3 pb-3 space-y-2">
                                    {list.map((service) => (
                                        <label
                                            key={service.service_id}
                                            className="flex items-center gap -2"
                                        >
                                            <input
                                                type="checkbox"
                                                name="service_ids"
                                                value={service.service_id}
                                                className="h-4 w-4"
                                            />
                                            <span className="flex-1">
                                                {service.service_name}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                ${service.base_price}{service.base_price > 0 ? "+" : ""}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="Block text-sm font-medium">Notes (optional)</label>
                    <textarea
                        className="mt-1 w-full rounded-md border p-3"
                        name="notes"
                        rows={3}
                        placeholder="Optional requests (shape, length, design, etc.)"
                    />
                </div>

                <button
                    type="button"
                    className="w-full rounded-md bg-black text white py-3 font-semibold"
                >
                    Check In
                </button>
            </form>
        </main>
    );
}