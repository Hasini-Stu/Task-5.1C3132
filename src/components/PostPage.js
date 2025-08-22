import React, { useState } from 'react';
import { Container, Header, Form, Radio, Segment, Button } from 'semantic-ui-react';
import './PostPage.css';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';

const PostPage = () => {
  const [postType, setPostType] = useState('question');

  const handlePostTypeChange = (e, { value }) => {
    setPostType(value);
  };

  return (
    <Container className="post-page">
      <Header as='h1' className="page-header">
        New Post
      </Header>
{/* radio button */}
      <Form>
        <Form.Field>
          <label>Select Post Type:</label>
          <Form.Group>
            <Form.Field>
              <Radio
                label='Question'
                name='postType'
                value='question'
                checked={postType === 'question'}
                onChange={handlePostTypeChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Article'
                name='postType'
                value='article'
                checked={postType === 'article'}
                onChange={handlePostTypeChange}
              />
            </Form.Field>
          </Form.Group>
        </Form.Field>
      </Form>

      <Segment className="content-section">
        <Header as='h3' className="section-header">
          What do you want to ask or share
        </Header>
        
        <p className="description">
          This section is designed based on the type of the post. It could be developed by conditional rendering. 
          {postType === 'question' ? (
            <span className="highlight"> For post a question, the following section would be appeared.</span>
          ) : (
            <span className="highlight"> For post an article, the following section would be appeared.</span>
          )}
        </p>

        {postType === 'question' ? (
          <QuestionForm />
        ) : (
          <ArticleForm />
        )}
      </Segment>

      <div className="post-button-container">
        <Button primary size='large' className="post-button">
          Post
        </Button>
      </div>
    </Container>
  );
};

export default PostPage;
