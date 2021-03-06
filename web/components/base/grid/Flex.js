//propTypes: value: OptionalNumber
const cn = require('classnames');

const Flex = class extends React.Component {
  render () {
    return (
      <div {... this.props} className={(this.props.className||'') + ' flex flex-1'}>
        {this.props.children}
      </div>
    );
  }
};

Flex.defaultProps = {
  value: 1
};

Flex.propTypes = {
  className: OptionalString,
  value: OptionalNumber,
  children: OptionalNode,
  style: React.PropTypes.any
};

module.exports = Flex;
