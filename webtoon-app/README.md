## Webtoon App 🎨📖

### 📖 Instructions
In this assignment I applied the fundamental web development concepts to recreate a frontend web page. I choose the web application called Webtoon and replicated a simple home page of it using **React.js** as the building tool for its fast development server and optimized production builds. and **CSS** for styling each component to ensure modular and maintainable styles. It contains  interactive elements to enhance user engagement.

### 💡 Technologies Used
- **React.js** 
- **Vite** 
- **CSS** 
- **React Icons** 

### 🛠️ Installation

1. **Clone the Repository**:
   Clone the repository to your local machine using the command:
   ```sh  
   git clone 
   cd webtoon-app
   ```

2. **Install Dependencies**:
   Install the required dependencies using npm:
   ```sh
   npm install
   ```
   This will install all the packages listed in the `package.json` file.

3. **Run the Development Server**:
   Start the development server to preview the application:
   ```sh
   npm run dev
   ```
   The application will be available at `http://localhost:5173` by default.

4. **Modify the Application**:
   - Open the project in your VS Code.
   - Navigate to the `src` folder to modify components or styles.
   - Use the `assets` folder for make any changes in the images.

5. **Deploy the Application**:
   - Use a platform like in Github.

### 📌 Component Structure
The application is structured into reusable React components, each responsible for a specific part of the UI:
- **Navbar**: Provides navigation links, a search bar, and a login button.
- **Banner**: Displays a featured webtoon image.
- **Categories**: Allows users to filter webtoons by day of the week.
- **FeaturedWebtoons**: Displays a grid of most popular webtoon cards with hover effects.
- **WebtoonCard**: Represents an individual webtoon with an image of the comic and hover effect to show like a summary of that comic.
- **Footer**: Contains social media links, app download buttons, and additional navigation links

### 📂 File Structure
```
webtoon-app/
├── src/
│   ├──assets         # for images
│   ├── components/        # React components
│   │   ├── Navbar.jsx
│   │   ├── Banner.jsx
│   │   ├── Categories.jsx
│   │   ├── FeaturedWebtoons.jsx
│   │   ├── WebtoonCard.jsx
│   │   ├── Footer.jsx
│   └── styles/            # CSS files
│   ├── App.css
│   ├── Navbar.css
│   ├── Banner.css
│   ├── Categories.css
│   ├── FeaturedWebtoons.css
│   ├── WebtoonCard.css
│   ├── Footer.css
│   └── index.css
├── App.jsx                # Main app component
├── main.jsx               # Entry point
├── vite.config.js         # Vite configuration
└── package.json           # Project metadata and dependencies
```

### 📚 References
- the actual web link (https://www.webtoons.com/en/)
- https://chatgpt.com/
- 
- 