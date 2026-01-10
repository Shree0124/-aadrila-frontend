import React from 'react';

const blogs = [
  {
    title: "How AI is Revolutionizing Document Management for Enterprises",
    date: "24 July, 2023",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
  },
  {
    title: "Top 5 Fraud Prevention Strategies for Financial Institutions",
    date: "24 July, 2023",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
  },
  {
    title: "The Future of OCR: From Basic Extraction to AI-Driven Intelligence",
    date: "24 July, 2023",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
  },
];

const BlogScreen = () => {
  return (
    <section style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontWeight: '700', fontSize: '30px', marginBottom: '10px' }}>Blogs</h1>
      <p style={{ textAlign: 'center', fontWeight: '400', fontSize: '14px', marginBottom: '40px', color: '#a55b2e' }}>
        <span style={{ color: '#a55b2e' }}>Lorem Ipsum</span> is simply dummy text of the printing and typesetting{' '}
        <span style={{ color: '#374a8c' }}>industry.</span><br />
        <span style={{ color: '#a55b2e' }}>Lorem Ipsum</span> has been the industry's <span style={{ color: '#374a8c' }}>standard.</span>
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '20px' }}>
        {blogs.map((blog, i) => (
          <div
            key={i}
            style={{
              width: '30%',
              background: '#fff',
              borderRadius: '10px',
              boxShadow: '0 0 20px rgb(99 93 143 / 0.3)',
              padding: '20px',
              fontSize: '13px',
              color: '#555',
            }}
          >
            <h4 style={{ fontWeight: '700', fontSize: '14px', marginBottom: '8px' }}>{blog.title}</h4>
            <a href="#" style={{ fontSize: '11px', color: '#374a8c', textDecoration: 'none', display: 'block', marginBottom: '10px' }}>
              {blog.date}
            </a>
            <p style={{ fontWeight: '400', fontSize: '12px', color: '#999', lineHeight: '1.3em' }}>{blog.description}</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button
          style={{
            backgroundColor: '#374a8c',
            border: 'none',
            color: 'white',
            padding: '8px 14px',
            margin: '0 5px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          &larr;
        </button>
        <button
          style={{
            backgroundColor: '#374a8c',
            border: 'none',
            color: 'white',
            padding: '8px 14px',
            margin: '0 5px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default BlogScreen;
