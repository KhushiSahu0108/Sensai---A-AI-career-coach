# SENSAI - A AI career coach
This website is designed to help candidates build structured, role-aligned resumes and prepare effectively for industry-specific roles using AI-assisted analysis and assessment tools.
The resume builder enables users to create and refine resumes with standardized formatting and role-relevant content. AI assistance is used to improve bullet points by emphasizing measurable outcomes, relevant skills, and industry-accepted terminology, making resumes easier to evaluate during shortlisting.

The platform also provides industry insights based on the user’s selected domain, including:
1. Commonly available job roles and role expectations
2. Minimum and maximum salary ranges for each role
3. Current demand trends across experience levels

These insights help candidates align their profiles with realistic market requirements before applying.

To support skill validation, the platform includes mock tests and practice assessments tailored to specific roles and domains. These assessments help users identify knowledge gaps and improve technical and analytical readiness, resulting in candidates who are better prepared for interviews and evaluations.

## Features
1. User authenication using clerk
2. Responsive UI
3. Gemini generated mock test based on industry and skills of the user
4. Visual representation of mock test scores using graphical analysis.
5. Building resume and improving points using ai asistance.
6. Real-time HTML to Markdown conversion feature.

## Tech Stack
- Frontend: React, Tailwind CSS
- Backend: Node.js
- Database: Prisma
- Authentication: Clerk

## Installation
1. Clone the repository - https://github.com/KhushiSahu0108/Sensai---A-AI-career-coach
2. cd Sensai---A-AI-career-coach
3. npm install
4. Create a `.env` file and add:
    ```env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
    CLERK_SECRET_KEY
    NEXT_PUBLIC_CLERK_SIGN_IN_URL = /sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL = /sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL = /onboarding
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL = /onboarding
    DATABASE_URL
    GEMINI_API_KEY

5. npm run dev
6. Usage
Explain how to use the app.

```md
    ## Usage
    1. Sign up or log in
    2. Enter your details
    3. Generate and download your resume
