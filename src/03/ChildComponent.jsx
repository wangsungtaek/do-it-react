import React from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends React.Component {
  render() {
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } = this.props;

    return (
      <div>
        <div>불리언 값: {boolValue ? 'true' : 'false'}</div>
        <div>숫자 값: {numValue}</div>
        <div>배열 값: {arrayValue}</div>
        <div>객체 값: {String(Object.entries(objValue))}</div>
        <div>노드 값: {nodeValue}</div>
        <div>함수 값: {String(funcValue)}</div>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
};

export default ChildComponent;
