import { useState } from "react";

import { RetroWindow, WindowMenu } from "./RetroWindow";
import documentIcon from "../../files/icons/Windows 2000 Text Document-2.png";

export default function ContactWindow({
  visible,
  close,
}: {
  visible: boolean;
  close: () => void;
}) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const recipient = "thanna96@gmail.com";
  const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  return (
    <RetroWindow
      visible={visible}
      close={close}
      title="New Message - Outlook Express"
      icon={documentIcon}
      width={440}
      height={410}
      contentClassName="classic-mail"
      toolbar={
        <WindowMenu items={["File", "Edit", "View", "Message", "Help"]} />
      }
      footer={
        <div className="paint-status">
          <span>Compose a message</span>
        </div>
      }
    >
      <div className="mail-actions">
        <a href={mailto} className="classic-dialog-button mail-action">
          Open email app
        </a>
        <a
          href={gmail}
          target="_blank"
          rel="noopener noreferrer"
          className="classic-dialog-button mail-action"
        >
          Open Gmail
        </a>
      </div>
      <div className="mail-fields">
        <label htmlFor="mail-to">To:</label>
        <input id="mail-to" value={recipient} readOnly />
        <label htmlFor="mail-subject">Subject:</label>
        <input
          id="mail-subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          maxLength={200}
        />
      </div>
      <label htmlFor="mail-message" className="sr-only">
        Message
      </label>
      <textarea
        id="mail-message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        maxLength={5000}
      />
      <p className="mail-help">
        Write here, then open your email app or Gmail to review and send.
        Nothing is sent from this window.
      </p>
    </RetroWindow>
  );
}
