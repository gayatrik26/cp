### Project Description

**Project Title**: Competitive Programming Profile Aggregator

**Project Overview**:
The Competitive Programming Profile Aggregator is a web application designed to streamline and centralize the competitive programming data of users across multiple platforms. By providing their unique user IDs from platforms such as LeetCode, GeeksforGeeks, Codeforces, and HackerRank, users can view their programming statistics, achievements, and progress in one unified dashboard. The project is built using React for the frontend and integrates with APIs from various competitive programming platforms to fetch and display the data.

**Key Features**:

1. **Multi-Platform Integration**: 
   - Supports user data retrieval from LeetCode, GeeksforGeeks, Codeforces, and HackerRank.
   - Users can input different user IDs for each platform to fetch and display their individual data.

2. **Unified Dashboard**:
   - A single, easy-to-navigate interface where users can view their data from all supported platforms.
   - Displays important metrics such as solved problems, contest rankings, badges, and more.

3. **Real-Time Data Fetching**:
   - The app retrieves the latest data from each platform whenever a user provides or updates their user ID.
   - Automatic updates are triggered upon input, ensuring users always see their most recent achievements.

4. **Error Handling and Feedback**:
   - The application includes robust error handling to inform users if there's an issue with data retrieval.
   - Clear messaging for invalid user IDs or API errors.

5. **Responsive Design**:
   - The UI is designed to be responsive, ensuring a seamless experience across different devices.

**Technologies Used**:
- **Frontend**: React.js, HTML, CSS
- **API Integration**: Axios for making HTTP requests to the competitive programming platform APIs.
- **Styling**: Custom CSS for responsive and accessible UI design.

**APIs Used**:

-**cp**:
 -[cp around various platforms](https://github.com/arnoob16/cpAPI)
 - [codechef](https://github.com/deepaksuthar40128/Codechef-API?tab=readme-ov-file)
 - [all-in-one](https://github.com/Abhijeet-AR/Competitive_Programming_Score_API?tab=readme-ov-file)

- **LeetCode API**: 
  - [LeetCode Stats API](https://github.com/JeremyTsaii/leetcode-stats-api) 
  - [Alfa LeetCode API](https://github.com/alfaarghya/alfa-leetcode-api) 
  - Retrieves user-specific data including solved problems, contest rankings, and achievements from LeetCode.

- **GeeksforGeeks API**: 
  - [GeeksforGeeks API](https://github.com/arnoob16/GeeksForGeeksAPI)
  - [2](https://github.com/pratham1singh/API-To-Fetch-GFG-user-Data)
  - Fetches user data such as article contributions, practice questions solved, and badges from GeeksforGeeks.

- **Codeforces API**: 
  - [Codeforces API](https://codeforces.com/apiHelp) 
  - Retrieves contest results, problem-solving statistics, and user ratings from Codeforces.

- **HackerRank API**: 
  - [HackerRank API](https://support.hackerrank.com/hc/en-us/articles/219993688-API-overview) 
  - Collects statistics like problem-solving achievements and contest performance from HackerRank.

**How It Works**:
1. Users input their unique user IDs for LeetCode, GeeksforGeeks, Codeforces, and HackerRank into the respective fields.
2. The application makes API calls to fetch the latest data from each platform.
3. The retrieved data is displayed on the dashboard, showing user statistics and achievements across all platforms.

**Project Structure**:
- **API**: Separate files handle API requests to each platform, ensuring modular and maintainable code.
- **Components**: The dashboard component handles the input of user IDs and displays the retrieved data.
- **Styles**: Custom CSS is used to style the application, ensuring a user-friendly and visually appealing interface.

This project aims to simplify the process of tracking and displaying competitive programming achievements by consolidating data from multiple platforms into one convenient location.
