import React, { useState } from 'react';
import { Form, Input, TextArea } from 'semantic-ui-react';
import './QuestionForm.css';

const QuestionForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    problemDescription: '',
    tags: ''
  });

  const handleInputChange = (e, { name, value }) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="question-form">
      <Form>
        <Form.Field>
          <label>Title</label>
          <Input
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Start your question with how, what, why, etc."
            className="form-input"
          />
        </Form.Field>

        <Form.Field>
          <label>Describe your problem</label>
          <TextArea
            name="problemDescription"
            value={formData.problemDescription}
            onChange={handleInputChange}
            placeholder="Describe your problem in detail..."
            rows={6}
            className="form-textarea"
          />
        </Form.Field>

        <Form.Field>
          <label>Tags</label>
          <Input
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
            className="form-input"
          />
        </Form.Field>
      </Form>
    </div>
  );
};

export default QuestionForm;
