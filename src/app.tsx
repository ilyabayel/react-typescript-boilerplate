import React, {ReactElement} from 'react';

export function App(): ReactElement {
  return (
    <div className="app" data-test="app-component">
      <span data-test="app-counter">Counter</span>
    </div>
  );
}
