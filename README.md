## AnswersAI Take Home Assignment - Data Viz Platform

# Set Up Instructions
  * clone repository
  * npm install
  * npm run dev

  (no environment variables required)

# Features Implemented
  * Website Dashboard
    * Site nav bar
    * Toggle-able side bar
    * Toggle-able info cards
    * Interactive graph
  * Edit Variables Panel
    * Toggle-able variable buttons
    * Info card appears after hovering for 1.5 seconds


# Technical Decisions and Trade-Offs
  * State Management
    * Used React for state management, 
    * Trade-offs: better suited for small-scale applications, prop drilling could become an issue
  * Styling
    * Tailwind CSS for styling, simple and easy to use, faster development
    * Trade-offs: limited customization compared to vanilla CSS
  * Graph
    * Used Chart.js library, open source, code is simple and clean
    * Trade-offs: steep learning curve, limited customization

# Known Limitations
  * Transitions & Animations
    * While I tried to add smooth transitions and animations to the website, the Tailwind transitions were not working and I couldn't figure out why. I spent a significant amount of time trying to figure this out, but ultimately decided to focus on the more important functional parts of the website. I am confident that with a bit more time, I could have created beautiful and smooth animations throughout the website.
  * Responsiveness
    * I also tried my best to make the website as responsive as possible using Tailwind breakpoints, but given the time constraint it is definitely not perfect. Thus, the website in it's current state may be hard to use on small or mobile devices. However, given more time I could definitely ensure that the website is fully responsive and transfers well to small devices.
  * Interactive Graph
    * The graph on the dashboard page is a bit off from the Figma designs, specifically the tooltip that appears when hovering over a datapoint. With more time I would be able to get the styling more exact.
  * Edit Variables Panel
    * The two "Primary Variable" and "Secondary Variable" tabs are not yet expandable, but it would be easy to make them toggleable to show variables similar to the top variable section.
  * Routing
    * Since the designs only required one page, I did not implement routing. However, if I were to expand the website I would use React Router to enable navigation between different pages

# Time Spent
  * ~5 hours

# Local Development Instructions
  * npm run dev


