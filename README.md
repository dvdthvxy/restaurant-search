1.	How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I spent around ~10 hours on the assignment. I had to teach myself Redux again while making this. I coded the assignment with functionality in mind so that there would be minimal/no bugs. Adding the filters and inputs definitely added more complexity to the business logic. If I had more time, I would have implemented more tests and broken down some of my functions to make them more reuseable like fetchData. I would also add more user friendly error messages.

2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

I like that JavaScript added optional chaining because it removes the redundant error checking to prevent `Cannot read property of undefined.` and crashing the entire application. I used it for `data?.length`. There was an instance were the program crashed because `data` was undefined.

3.	How would you track down a performance issue in production? Have you ever had to do this?

I have not had to track down performanc issues. I do try to avoid nesting loops because I know it will exponetially slow down performance.

4.	How would you improve the API that you just used?

I would add a cuisine and website key to the restaurant object. I would also add an endpoint that randomly suggests a restaurant within the city provided by the user.

5.	Please describe yourself using JSON.
```
{
    "name": "David",
    "occupation": "Web Developer",
    "hobbies": ["cooking", "rock climbing", "mechanical keyboards"],
    "workExperience": [
        {
            "employer": "Climax Media",
            "jobTitle": "Front End Developer",
            "jobDescription": "Create UI components using React"
        },
        {
            "employer": "Computershare",
            "jobTitle": "Product Support Representative",
            "jobDescription": "Create and maintain test cases. Coordinate and execute test plan. Provide 2nd level support for company software."
        }
    ]
}
```