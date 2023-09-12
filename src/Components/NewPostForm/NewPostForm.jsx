import React, { useState } from "react";
import "./NewPostForm.css";

const NewPostForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
  };

  return (
    <div className="wrapper">
      <h1>Post Feed</h1>
      {submitting && <div>Submtting Form...</div>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" />
            <p>Post</p>
            <input name="post" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPostForm;
