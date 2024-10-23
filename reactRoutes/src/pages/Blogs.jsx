import React from 'react';
import styled from 'styled-components';

// Styled Components
const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
`;

const ArticleList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ArticleItem = styled.li`
  background-color: #fff;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ArticleTitle = styled.h2`
  font-size: 1.8rem;
  color: #0070f3;
`;

const ArticleDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Blogs = () => {
  return (
    <BlogContainer>
      <Title>Blog Articles</Title>
      <ArticleList>
        <ArticleItem>
          <ArticleTitle>Understanding React Hooks</ArticleTitle>
          <ArticleDescription>
            Learn how React Hooks can simplify your code and make your components more efficient.
          </ArticleDescription>
        </ArticleItem>
        <ArticleItem>
          <ArticleTitle>Styled Components: Best Practices</ArticleTitle>
          <ArticleDescription>
            Discover how to use Styled Components to create beautiful, maintainable code in your React projects.
          </ArticleDescription>
        </ArticleItem>
        <ArticleItem>
          <ArticleTitle>Introduction to Next.js</ArticleTitle>
          <ArticleDescription>
            A beginner's guide to building modern web applications with Next.js and React.
          </ArticleDescription>
        </ArticleItem>
      </ArticleList>
    </BlogContainer>
  );
};

export default Blogs;
