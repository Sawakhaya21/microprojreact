import React from 'react';


const blogs = [
    {
      title: 'How to Improve Your Coding Skills',
      content: 'Improving your coding skills requires practice, dedication, and learning from others. Here are some tips to help you get started...',
      image: '/bg2.jpg',
    },
    {
      title: 'Understanding JavaScript Closures',
      content: 'JavaScript closures are a fundamental concept that every developer should understand. In this article, we will explore what closures are and how to use them effectively...',
      image: '/serv4.jpg',
    },
    {
      title: 'The Future of Web Development',
      content: 'Web development is constantly evolving. In this post, we will discuss some of the latest trends and technologies that are shaping the future of the web...',
      image: '/serv5.jpg',
    },
  ];
  
  const BlogSection = () => {
    return (
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-4xl font-bold mb-12">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {blogs.map((blog, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-t-lg"
                />
                <h3 className="text-2xl font-semibold mt-4">{blog.title}</h3>
                <p className="text-gray-700 mt-2">{blog.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default BlogSection;
  