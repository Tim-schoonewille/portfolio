import type { ProjectContent } from "$lib/types";

export const project_contents: ProjectContent[] = [
  {
    slug: "ecommerce",
    content: `
              <h2 class="text-2xl font-bold text-primary-700 mb-4">
            Project Overview
          </h2>
          <div class="prose max-w-none text-gray-600">
            <p class="mb-4">
              This e-commerce platform is a comprehensive solution designed to
              provide businesses with a modern, scalable online store. The
              project was developed with a focus on user experience,
              performance, and security.
            </p>

            <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">
              Key Features
            </h3>
            <ul class="list-disc pl-5 space-y-2 mb-6">
              <li>Responsive design optimized for all devices</li>
              <li>Advanced product search and filtering</li>
              <li>Secure user authentication and authorization</li>
              <li>Integrated payment processing with Stripe</li>
              <li>Real-time inventory management</li>
              <li>Order tracking and history</li>
              <li>Admin dashboard with analytics</li>
              <li>Product reviews and ratings system</li>
            </ul>

            <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">
              Development Process
            </h3>
            <p class="mb-4">
              The development process followed an agile methodology, with
              regular sprints and iterative improvements based on user feedback.
              The frontend was built using React with a component-based
              architecture for maintainability and reusability.
            </p>

            <p class="mb-4">
              For the backend, I implemented a RESTful API using Node.js and
              Express, with MongoDB as the database. This stack provided the
              flexibility and performance needed for a modern e-commerce
              application.
            </p>

            <p class="mb-4">
              One of the main challenges was implementing a secure and seamless
              payment system. I integrated Stripe's API to handle payments,
              ensuring PCI compliance and a smooth checkout experience.
            </p>

            <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">
              Technical Highlights
            </h3>
            <ul class="list-disc pl-5 space-y-2 mb-6">
              <li>JWT-based authentication system</li>
              <li>Optimized database queries for performance</li>
              <li>Implemented caching strategies to reduce load times</li>
              <li>Responsive images with lazy loading</li>
              <li>Server-side rendering for improved SEO</li>
              <li>
                Comprehensive test suite with Jest and React Testing Library
              </li>
              <li>CI/CD pipeline for automated testing and deployment</li>
            </ul>

            <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">
              Outcome & Results
            </h3>
            <p class="mb-4">
              The platform has successfully served over 10,000 customers since
              launch, with a 25% increase in conversion rate compared to the
              client's previous solution. Page load times were reduced by 40%,
              and the mobile experience has received positive feedback from
              users.
            </p>

            <p>
              This project demonstrates my ability to build complex, full-stack
              applications with a focus on user experience, performance, and
              scalability.
            </p>
          </div>
    `,
  },
];
