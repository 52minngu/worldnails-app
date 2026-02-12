import { services } from "@/lib/services"
export default async function CheckInPage({
    params,
}: {
    params: Promise<{ employee_id: string }>;
}) {
    const { employee_id } = await params;

    return (
        <main className="min-h-screen p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold">WorldNails Check-in</h1>
            <p className="mt-2 text-gray-600">
                Checking in with:<span className="font-semibold">{employee_id}</span>
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
                    <label className="Block text-sm font-medium">Services</label>

                    <div className="mt-2 space-y-2">
                        {services.map((service) => (
                            <label key={service.service_id} className="flex items-centerspace-x-2">
                                <input
                                    type="checkbox"
                                    name="service_ids"
                                    value={service.service_id}
                                />
                                <span>
                                    {service.service_name} (${service.base_price}+)
                                </span>
                            </label>
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