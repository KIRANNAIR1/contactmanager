import React from 'react';

export default props => {
  return (
    <div>
      <h1 className="display-4">
        About Contact Manager{props.match.params.id}
      </h1>
      <p className="lead">Simple add Manager</p>
      <p className="text-secondary">Version1.0.0</p>
    </div>
  );
};
