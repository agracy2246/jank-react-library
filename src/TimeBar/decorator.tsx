import React from 'react';

// This is a simple decorator that adds a wrapper div with a fixed width
export const withDecorator = (Story: any) => (
  <div style={{ width: '150px' }}>
    <Story />
  </div>
);