# Full-Stack E-Commerce Platform

This is a complete full-stack e-commerce application that includes a feature-rich admin dashboard for managing the store and a beautiful storefront for customers. The project is built using modern technologies like Next.js, React, and Tailwind CSS.

The project is a monorepo containing two separate applications:

- `ecommerce-admin`: The admin dashboard, CMS, and API.
- `ecommerce-store`: The customer-facing storefront.

---

## Core Features

### Admin Dashboard (`ecommerce-admin`)

- **Multi-Store Management**: Manage multiple stores from a single dashboard. Each store has its own categories, products, and billboards.
- **CMS Functionality**: Create, read, update, and delete:
  - Products (with multiple images)
  - Categories
  - Billboards (for homepage promotions)
  - Sizes
  - Colors
- **API Generation**: The CMS automatically generates API routes for each store.
- **Order Management**: View and manage customer orders.
- **Sales Analytics**: Dashboard with graphs to visualize sales and revenue.
- **Authentication**: Secure authentication using Clerk.
- **Payment Integration**: Integrated with Stripe for processing payments.

### Storefront (`ecommerce-store`)

- **Product Catalog**: View products by category.
- **Filtering**: Filter products by size, color, and other attributes.
- **Product Details**: View detailed information for each product.
- **Shopping Cart**: Add products to a cart and manage them.
- **Checkout**: Secure checkout process powered by Stripe.
- **Responsive Design**: A clean, modern, and responsive UI for a great user experience on any device.

---

## Technology Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI, Radix UI
- **Database**: Prisma with MySQL (PlanetScale)
- **Authentication**: Clerk
- **Payments**: Stripe
- **Image Management**: Cloudinary

---

## Project Structure

The repository is organized into two main packages:

- `ecommerce-admin/`: This is the Next.js application for the admin dashboard. It handles all the business logic, data management, and provides the API that the storefront consumes.
- `ecommerce-store/`: This is the Next.js application for the customer-facing store. It fetches data from the admin's API to display products, categories, and handles the shopping cart and checkout flow.

---

## Getting Started

To get the project running locally, you'll need to set up each application separately.

### Prerequisites

- Node.js (version 14.x or higher)
- `npm` or `yarn`

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd e-commerce-project
    ```

2.  **Set up the Admin Dashboard:**

    - Navigate to the `ecommerce-admin` directory:
      ```bash
      cd ecommerce-admin
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Set up your environment variables by creating a `.env` file. A `.env.example` or the original `README.md` in that folder should provide the required variables (e.g., `DATABASE_URL`, `CLERK_SECRET_KEY`, `STRIPE_API_KEY`, etc.).
    - Push the database schema:
      ```bash
      npx prisma db push
      ```
    - Run the development server:
      ```bash
      npm run dev
      ```

3.  **Set up the Storefront:**
    - In a new terminal, navigate to the `ecommerce-store` directory:
      ```bash
      cd ecommerce-store
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Set up your environment variables in a `.env` file. You will likely need to point to the API provided by the `ecommerce-admin` application.
    - Run the development server:
      ```bash
      npm run dev
      ```

After following these steps, the admin dashboard and the storefront should be running on different local ports.
