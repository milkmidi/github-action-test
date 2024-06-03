import React from 'react';

type HeaderType = {
  title?: string;
};

export default function Header(props: HeaderType) {
  const { title = 'default title' } = props;
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}
