import React, { useState, useEffect } from "react";

function BlogSection() {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState(["Cybersecurity", "Web Development", "Company Updates"]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {

    const mockArticles = [
      {
        id: 1,
        title: "Top 5 Cybersecurity Tips for Small Businesses",
        category: "Cybersecurity",
        content: "Learn the best practices for protecting your business...",
        date: "2025-01-01",
      },
      {
        id: 2,
        title: "How to Build a Responsive Website",
        category: "Web Development",
        content: "Discover the tools and techniques for creating responsive designs...",
        date: "2025-01-02",
      },
      {
        id: 3,
        title: "Our Journey: Winning the Best Startup Award",
        category: "Company Updates",
        content: "We’re thrilled to share our recent milestone...",
        date: "2025-01-03",
      },
    ];

    setArticles(mockArticles);
  }, []);


  const filteredArticles = articles.filter((article) => {
    return (
      (!selectedCategory || article.category === selectedCategory) &&
      (article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div className="blog-section">
      <h1>Our Blog</h1>


      <div className="blog-controls">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Articles */}
      <div className="blog-articles">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div key={article.id} className="blog-article">
              <h2>{article.title}</h2>
              <p>{article.content}</p>
              <small>{article.date}</small>
              <small>{article.category}</small>
            </div>
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>


      <div className="blog-cta">
        <h3>Stay Updated</h3>
        <p>Subscribe to our newsletter for the latest insights and updates!</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default BlogSection;
