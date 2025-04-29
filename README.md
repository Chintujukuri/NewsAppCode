# 📰 NewsMonkey - React News App

A responsive, real-time news application built with **React** that fetches and displays news articles using the [NewsAPI](https://newsapi.org/). This project showcases my ability to build functional React apps with API integration, component-based architecture, and infinite scrolling.



## 📸 Screenshots

![image](https://github.com/user-attachments/assets/a01d19be-7e4c-4c86-91d3-be445a6eec12)
![image](https://github.com/user-attachments/assets/17c1266b-0da6-4f93-a96c-992df37236d5)
![image](https://github.com/user-attachments/assets/67e6592b-7175-4182-88cc-93aed44df0a8)




## 🚀 Features

- 📰 Fetches top headlines from multiple categories (Technology, Business, Entertainment, etc.)
- 🔄 Infinite scroll for seamless article loading
- 🎨 Responsive UI using Bootstrap
- 🔁 Reusable Spinner component for loading states
- 🖼️ Fallback images for broken URLs
- 🧠 Dynamic document title based on category
- 🔍 Category-based filtering
- 📊 API progress bar using props and `setProgress` method

## 🛠️ Tech Stack

- **Frontend**: React, Bootstrap  
- **Data Source**: [NewsAPI.org](https://newsapi.org/)  
- **Tools**: Git, GitHub, VSCode

## 🔧 Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/news-react-app.git
cd news-react-app

# 2. Install dependencies
npm install

# 3. Add your NewsAPI key
# Create a .env file in the root directory and add:
REACT_APP_NEWS_API_KEY=your_api_key_here

# 4. Run the app locally
npm start

# Open http://localhost:3000 in your browser.


## 📁 Project Structure
src/
├── components/
│   ├── News.js
│   ├── NewsItem.js
│   └── Spinner.js
├── App.js
├── index.js
├── .env (not committed)

##✨ Learnings
Built a modern UI with reusable components

Integrated an external REST API with robust error handling

Applied infinite scrolling and lazy loading

Managed state and props effectively

Deployed a React app for public access
