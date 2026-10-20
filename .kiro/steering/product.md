# Product

MSU Naawan is a web application for Mindanao State University that provides interactive campus maps and an events calendar across several MSU campuses.

## Core Features

- **Interactive campus maps** (Leaflet) for multiple campuses: MSU Naawan, MSU General Santos, MSU Sulu, and MSU Tawi-Tawi. Each campus map shows buildings/locations with popups, images, a searchable sidebar list, and routing between points.
- **Events calendar** (FullCalendar) showing campus announcements and events.
- **Campus landing content**: announcements, partner carousels, and informational cards.

## Data Sources

Building/location data and images are sourced from a SharePoint/Microsoft 365 backend, accessed through a separate fetch API (`VITE_URL_FETCH`). Microsoft OAuth tokens (client credentials) are used for authenticated requests. Local images under `public/images/mapImages` are preferred when available, falling back to SharePoint.

## Audience

Prospective and current students, staff, and visitors who need to navigate MSU campuses and stay informed about campus events.
