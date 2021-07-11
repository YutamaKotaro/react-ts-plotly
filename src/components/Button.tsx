import React from 'react'

export function Button() {
  return <div></div>
}

const Component: React.FC<{hoge: string}> = (props) => {
  return (
    <div>
      <p>{props.hoge}</p>
    </div>
  );
};
Component.defaultProps

const Component2 = (props: any) => {
  return (
    <div>
      <p>{props.hoge}</p>
    </div>
  );
}

