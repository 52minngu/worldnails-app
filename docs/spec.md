# WorldNails Spec (v0.1)

## Goal
Customer QR check-in that logs visits (and later appointments) for a nail sallon.

## Must-haves (v1)
- Customer enters: name, services (multi-select), walk-in/appointment
- Employee autofilled from desk QR (custtomer cannot change employee)
- Timestamp auto-filled automatically
- Logged to a spreadsheet (Google Sheets)
- Employee IDs use simple Vietnamese spelling (stable, lowercase)
- Service IDs are human-readable slugs (stable, lowercase)

## Non-goals (v1)
- Payments / POS
- Customer accounts
- Full scheduling calendar (Phase 2)

## User flow (v1)
1. Customer scans QR at employee desk
2. Page shows employee display name (English-facing)
3. Customer enters name, selects one or more services, selects walk-in/appointment
4. Submit
5. System logs the vist

## Data Model (canonical)
Employees(
    employee_id, employee_name, role, active
)

Services(
    service_id, service_name, category, base_price, active
)

Visits(
    visit_id, timestamp, customer_name, visit_type,
    employee_id, employee_name,
    services_text, status, source, notes
)

VisitServes(
    visit_id, service_id, service_name, service_price
)

## QR URL Format
/checkin/{employee_id}

## API Contract (Check-in)
POST /api/checkin
Payload:
- customer_name: string
- employee_id: string
- visit_type: "walkin" | "appointment"
- service_ids: string[]
- notes?: string

## Server responsibilities:
- Validate employee_id exists and is active
- Validate service_ids exist and are active
- Generate visit_id
- Add server timestamp
-Write to Visits + VisitServices