# **GitHub - DevDetective**

## **Project Overview**  
**GitHub - DevDetective** is a web application that allows users to search for GitHub profiles by simply entering a GitHub username. Leveraging the GitHub API, the application fetches and displays key information about the developer in a user-friendly manner. Search results are presented as visually appealing cards, offering a clean, organized, and responsive layout of the user's profile data. Additionally, the application features both dark and light modes, enhancing user experience and accessibility.

## **Key Features**

### 1. **GitHub API Integration**
- Uses the GitHub REST API to fetch real-time user data based on a GitHub username.
- Retrieves profile details such as:
  - Profile Picture
  - Username
  - Bio
  - Public Repositories Count
  - Followers and Following Counts

### 2. **Profile Details Displayed as Cards**
- Displays each user's profile in a clean and minimalistic card format.
- Card information includes:
  - **Profile Picture**: Avatar of the GitHub user.
  - **Username**: GitHub handle of the user.
  - **Bio**: The user's short description from their GitHub profile.
  - **Repositories Count**: Total number of public repositories.
  - **Followers and Following Counts**: Number of followers and users they follow.
- The card layout ensures responsive design across various devices.

### 3. **Dark and Light Mode**
- Provides a toggle button to switch between dark and light modes:
  - **Light Mode**: A bright interface with a white background and dark text, ideal for well-lit environments.
  - **Dark Mode**: A sleek dark-themed interface that reduces eye strain, especially in low-light conditions.

### 4. **Responsive Design**
- The application adapts seamlessly across different devices, offering a great user experience on both mobile and desktop.
- Utilizes CSS media queries to enhance display on different screen sizes.

## **Technology Stack**
- **HTML5**: For structuring the webpage and providing a semantic layout.
- **CSS3**: For styling the UI, implementing dark/light modes, and ensuring responsive design.
- **JavaScript**: For fetching data from the GitHub API and rendering user profiles in card format.
- **GitHub API**: Provides real-time data about GitHub users.

## **How It Works**

1. **User Input**  
   Users enter a GitHub username into the search bar.

2. **Fetching Data**  
   On submission, a `fetch` request is sent to the GitHub API, retrieving the user's profile data.

3. **Displaying Profile**  
   The fetched data is dynamically displayed within a card structure using JavaScript’s DOM manipulation.

4. **Dark/Light Mode Toggle**  
   Users can toggle between dark and light modes via a switch button. The application updates the CSS classes dynamically to reflect the selected mode.

## **Deployed Link**

You can view the live application [here](https://rishisrivastava07.github.io/GitHub-DevDetective/).

## **Challenges and Learnings**

- **API Rate Limiting**: Managed GitHub’s API rate limits to ensure a smooth experience, even during multiple searches.
- **Error Handling**: Provided clear and informative error messages for invalid or non-existent usernames, improving usability.
- **Dynamic Theming**: Successfully implemented a toggle between dark and light modes with smooth transitions across the interface.

## **Contributing**

Contributions are always welcome! If you'd like to improve this project, feel free to submit pull requests or report issues. Here’s how you can contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request to the **GitHub-DevDetective** branch.

For major changes, please open an issue first to discuss what you'd like to change.

### **Feedback and Suggestions**

If you have any feedback, feel free to reach out by opening an issue or submitting a pull request!
