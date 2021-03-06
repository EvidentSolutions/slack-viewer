import React from 'react';
import styles from './style.css';

export function mapToJsx(part, index) {
  if (part.paragraph) return (
      <div key={index}>
          {renderToken(part.content)}
      </div>
  );
  if (part.quote) return (
    <div key={index} className={styles.quoteWrapper}>
      {renderToken(part.quote)}
    </div>
  );
  if (part.normal) return <span key={index}>{part.normal}</span>;
  if (part.url) return <a key={index} className={styles.link} href={part.url}>{part.url}</a>;
  if (part.italics) return <i key={index}>{part.italics}</i>;
  if (part.smiley) return <small key={index}>{part.smiley}</small>;
  if (part.multiline) return (
    <div key={index} className={styles.multilineWrapper}>
      <div className={styles.multilinePre}>{part.multiline}</div>
    </div>
  );
  if (part.pre) return <span key={index} className={styles.singlePre}>{part.pre}</span>;
  if (part.userReference) return <span key={index}>@slack_käyttäjä</span>;
  if (part.number) return <span key={index} className={styles.number}>{part.number}</span>;
  if (part.youtube) return <iframe key={index} className={styles.youtube} src={part.youtube}></iframe>;
  if (part.shortcut) return <span key={index} className={styles.cmdButton}>{part.shortcut}</span>;
  if (part.lowerThan) return <span key={index}>&lt;</span>;
  if (part.greaterThan) return <span key={index}>&gt;</span>;
}

export function renderToken(parsed) {
  return parsed.map((part, index) => mapToJsx(part, index));
}