import React, { useState } from 'react';

const MailboxForm = ({ addBox }) => {
  const [boxholder, setBoxholder] = useState('');
  const [boxSize, setBoxSize] = useState('Small');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ boxholder, boxSize });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="boxholder">Boxholder Name</label>
      <input
        type="text"
        id="boxholder"
        value={boxholder}
        onChange={(e) => setBoxholder(e.target.value)}
      />

      <label htmlFor="boxSize">Box Size</label>
      <select
        id="boxSize"
        value={boxSize}
        onChange={(e) => setBoxSize(e.target.value)}
      >
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>

      <button type="submit">Create Mailbox</button>
    </form>
  );
};

export default MailboxForm;
