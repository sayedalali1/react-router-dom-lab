import React from 'react';
import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h2>Mailboxes</h2>
      <ul>
        {mailboxes.map((mailbox) => (
          <li key={mailbox._id}>
            <Link to={`/mailboxes/${mailbox._id}`} className="mail-box">
              {mailbox._id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MailboxList;
