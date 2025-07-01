# MyLibraryApp

## Project Overview
MyLibraryApp is a comprehensive library management system built with modern web technologies. It provides an intuitive interface for managing library resources, including books, users, borrowings, fines, reservations, and activities. The system supports features such as catalog browsing, user authentication, activity management, and resource booking, making it a complete solution for library administration and member engagement.

## Features
- **Catalog Management:** Browse and manage books with categories, photos, and detailed information.
- **User Management:** Handle user profiles, roles, and authentication.
- **Borrowing & Returns:** Track book borrowings, due dates, and returns.
- **Fines Management:** Manage fines for late returns with payment support.
- **Ratings & Reviews:** Users can rate and review books.
- **Reservations:** Reserve books and manage reservation expirations.
- **Staff Picks:** Highlight recommended books by staff.
- **Activities & Events:** Manage library activities with scheduling and photos.
- **Library Resources:** Manage library cards, equipment rentals, and room bookings.
- **Locations:** Display library locations for members.
- **Authentication:** Secure sign-in and user sessions with NextAuth.
- **Responsive UI:** Built with Radix UI components and Tailwind CSS for a modern, accessible interface.

## Tech Stack
- **Framework:** Next.js 15
- **Language:** TypeScript, React 19
- **Database:** MySQL with Prisma ORM
- **Authentication:** NextAuth.js with Prisma adapter
- **Styling:** Tailwind CSS, Radix UI components
- **Payments:** Stripe integration
- **Other Libraries:** Supabase, React Hook Form, Zod, Sonner for notifications

## Database Schema
The database schema is designed with Prisma and includes the following main entities:
- **Books:** Including categories, photos, ratings, borrowings, reservations, and staff picks.
- **Users:** Profiles with roles, borrowings, fines, ratings, and reservations.
- **Borrowings & Fines:** Track book loans and associated fines.
- **Activities:** Library events with scheduling and photos.
- **Categories:** Book categorization for better organization.

## Getting Started

### Prerequisites
- Node.js (recommended version compatible with Next.js 15)
- MySQL database
- Environment variables configured in `.env.local` (e.g., DATABASE_URL, Stripe keys)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd thelibrary-managememt-system
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the database and run migrations:
   ```bash
   npm run migrate:sql
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production
```bash
npm run build
npm start
```

## Folder Structure
- `src/app/` - Main application code including pages and layouts
- `src/components/` - Reusable UI components
- `src/lib/` - Utility libraries and API clients
- `prisma/` - Database schema and migration files
- `public/` - Static assets like images and icons

## License
This project is licensed under the MIT License.
