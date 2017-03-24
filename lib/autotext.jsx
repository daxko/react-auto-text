import React from 'react';

class AutoText extends React.Component {

  constructor(props) {
    super(props);
    this.setFontSize = this.setFontSize.bind(this);
    this.autoText = this.autoText.bind(this);
  }

  componentDidMount() {
    this.autoText();
  }

  componentDidUpdate({ children: prevChildren }) {
    if(prevChildren !== this.props.children) {
      this.autoText();
    }
  }

  setFontSize(fontSize) {
    let { autoText: node } = this.refs;
    node.style.fontSize = `${fontSize}px`;
  }

  autoText() {
    let { maxHeight, maxFontSize, onChange } = this.props
      , { autoText: node } = this.refs
      , fontSize = maxFontSize;

    // Set initial font size
    this.setFontSize(maxFontSize);

    while(node.getBoundingClientRect().height > maxHeight) {
      fontSize -= 1;
      this.setFontSize(fontSize);
    }

    if(typeof onChange === 'function') {
      onChange(fontSize);
    }
  }

  render() {
    let { maxHeight, maxFontSize, minFontSize, children, ...props } = this.props;

    return (
      <div ref="autoText" style={{ fontSize: `${maxFontSize}px` }} {...props}>
        {children}
      </div>
    );
  }

}

AutoText.defaultProps = {
  maxHeight: 100,
  minFontSize: 10,
  maxFontSize: 20
};

export default AutoText;
