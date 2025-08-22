import React, { useState } from 'react';
import { Form, Input, TextArea } from 'semantic-ui-react';
import './ArticleForm.css';

const ArticleForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    articleText: '',
    tags: ''
  });

  const handleInputChange = (e, { name, value }) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="article-form">
      <Form>
        <Form.Field>
          <label>Title</label>
          <Input
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter a descriptive title"
            className="form-input"
          />
        </Form.Field>

        <Form.Field>
          <label>Abstract</label>
          <TextArea
            name="abstract"
            value={formData.abstract}
            onChange={handleInputChange}
            placeholder="Enter a 1-paragraph abstract"
            rows={4}
            className="form-textarea"
          />
        </Form.Field>

        <Form.Field>
          <label>Article Text</label>
          <TextArea
            name="articleText"
            value={formData.articleText}
            onChange={handleInputChange}
            placeholder="Enter your article content here..."
            rows={10}
            className="form-textarea"
          />
        </Form.Field>

        <Form.Field>
          <label>Tags</label>
          <Input
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
            className="form-input"
          />
        </Form.Field>
      </Form>
    </div>
  );
};

export default ArticleForm;
