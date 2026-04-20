import React from 'react';
import "./Categories.css"

// Rasmlarni import qilish
import solarImg from '../../../assets/image-1.png';
import helmetImg from '../../../assets/image-2.png';
import excavatorImg from '../../../assets/image-3.png';
import toolsImg from '../../../assets/image-4.png';
import workerImg from '../../../assets/image-5.png';
import imgg from '../../../assets/img200.png';

const posts = [
  { id: 1, category: 'Industry News', date: 'June 24, 2023', comments: 0, title: 'How to Build Climate Change-Resilient Infrastructure', desc: 'Ipsum est nisi purus velit facilisi vitae, dolor. Lorem scelerisque integer duis et nulla lobortis cursus...', img: solarImg },
  { id: 2, category: 'Innovation', date: 'June 12, 2023', comments: 0, title: 'How Construction Can Help Itself', desc: 'Porta habitant vitae quam bibendum. Leo viverra mori volutpat rhoncus placerat vitae scelerisque...', img: helmetImg },
  { id: 3, category: 'Expert Tips', date: 'May 14, 2023', comments: 0, title: 'The Difference Between a Digger and an Excavator', desc: 'Cras est nisi purus velit facilisi vitae, dolor. Lorem scelerisque integer duis et nulla lobortis cursus...', img: excavatorImg },
  { id: 4, category: 'Expert Tips', date: 'February 25, 2023', comments: 1, title: 'Building Construction Hand Tools', desc: 'Tellus quis aliquam ut elementum nulla dolor sodales sapien. Vitae elit id dolor tristique massa...', img: toolsImg, active: true },
  { id: 5, category: 'Industry News', date: 'January 13, 2023', comments: 0, title: 'Top 10 Construction Trends', desc: 'Dignissim sed enim, eleifend morbi condimentum. Congue id quis vulputate egestas ac. Ullamcorper...', img: workerImg },
  { id: 6, category: 'Company News', date: 'December 1, 2022', comments: 0, title: 'Types of Flooring Materials', desc: 'Maecenas donec lacinia massa, neque bibendum at mauris, aenean. Velit eros in sem parturient...', img: imgg },
];

const navItems = ['All News', 'Company News', 'Innovation', 'Industry News', 'Expert Tips', 'Marketing'];

const Categories = () => {
  return (
    <div className="container">
      <h1 className="title">Categories</h1>
      
      <nav className="nav">
        {navItems.map((item, idx) => (
          <button 
            key={idx} 
            className={idx === 0 ? 'navBtn activeNav' : 'navBtn'}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="grid">
        {posts.map((post) => (
          <article key={post.id} className="card">
            <div className="imgWrapper">
              <img src={post.img} alt={post.title} className="image" />
            </div>
            
            <div className="meta">
              <span className="category">{post.category}</span>
              <span className="divider">|</span>
              <span>{post.date}</span>
              <span className="divider">|</span>
              <span>{post.comments} Comments</span>
            </div>

            <h3 className={`cardTitle ${post.active ? 'activeTitle' : ''}`}>
              {post.title}
            </h3>
            <p className="description">{post.desc}</p>
          </article>
        ))}
      </div>

      <div className="pagination">
        <span className="activePage">1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>→</span>
      </div>
    </div>
  );
};

export default Categories;
