import React from 'react';
import '../CSS/Blog.css'; // Optional: Import a CSS file for styling

const Blog = () => {
    const posts = [
        {
            title: "Exploring the Beauty of Nature",
            excerpt: "Join us as we explore the breathtaking landscapes and natural wonders that our region has to offer. Discover hidden gems and scenic spots perfect for your next adventure.",
            link: "#"
        },
        {
            title: "Top 10 Travel Tips for 2023",
            excerpt: "Planning your next getaway? Here are our top 10 travel tips that will help you make the most of your journey, from packing smart to finding the best local experiences.",
            link: "#"
        },
        {
            title: "A Culinary Journey: Local Delicacies",
            excerpt: "Experience the rich culinary heritage of our region! This blog post dives into the must-try local dishes and where to find them.",
            link: "#"
        },
        {
            title: "Sustainable Tourism: Making a Difference",
            excerpt: "Learn how you can contribute to sustainable tourism while enjoying your travels. Discover eco-friendly practices and accommodations that help protect our environment.",
            link: "#"
        }
    ];

    return (
        <div className="blog-container">
            <h1>Our Blog</h1>
            <div className="blog-grid">
                {posts.map((post, index) => (
                    <div className="blog-card" key={index}>
                        <h2>{post.title}</h2>
                        <p>{post.excerpt}</p>
                        <a href={post.link} className="read-more-button">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;