import React from 'react';
import './App.css';
import LifecycleExample from './03/LifecycleExample';
// import StateExample from './03/StateExample';
// import ChildProperty from './03/ChildProperty';
// import DefaultPropsComponent from './03/DefaultPropsComponent';
// import ChildComponent2 from './03/ChildComponent2';
// import ChildComponent from './03/ChildComponent';

class App extends React.Component {
  render() {
    // const arr = [1, 2, 3];
    // const obj = { name: '제목', age: 30 };

    return (
      // <ChildComponent
      //   boolValue
      //   numValue={1}
      //   arrayValue={arr}
      //   objValue={obj}
      //   nodeValue={<h1>노드</h1>}
      //   funcValue={() => {
      //     console.log('메시지');
      //   }}
      // />
      // <ChildComponent2 objValue={{ name: 'Taek', age: 12 }} />
      // <DefaultPropsComponent />
      // <ChildProperty>
      //   <div>이게 나온다고?</div>
      // </ChildProperty>
      // <StateExample />
      <LifecycleExample />
    );
  }
}

export default App;
