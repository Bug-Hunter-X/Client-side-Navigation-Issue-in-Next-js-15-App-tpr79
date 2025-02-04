# Next.js 15 Client-Side Navigation Bug

This repository demonstrates a peculiar navigation issue encountered in a Next.js 15 application.  The problem arises when attempting client-side navigation from a page (e.g., '/about') back to the home page ('/') using the `router.push('/')` method.  The navigation action does not result in the expected URL change or rendering of the home page.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to '/about'.
5. Click the 'Go Back Home' button.

The URL should remain '/about', and the home page content does not appear.

## Expected Behavior

Clicking the 'Go Back Home' button should navigate the user to the '/' route, updating the URL and rendering the content of the home page.

## Actual Behavior

The URL does not change, and the home page content is not displayed.  The about page remains rendered.

## Workaround

The issue has been resolved by using `router.replace('/')` instead of `router.push('/')` which fixes the issue.  See the solution branch for the correction. 

## Troubleshooting Notes

* This issue was tested on both local development and Vercel deployment, showcasing the same unexpected behavior.
* The problem seems to be specifically related to client-side navigation from a route other than the root route. 
* Adding a `console.log` to the `handleClick` function confirms the `router.push` function is called and seemingly executed, yet the navigation does not visibly occur. 