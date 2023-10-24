import React, { Component } from 'react';

class ToggleParagraph extends Component {
  state = {
    isParagraphVisible: true,
  };

  toggleParagraphVisibility = () => {
    this.setState({ isParagraphVisible: !this.state.isParagraphVisible });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleParagraphVisibility}>
          Toggle Paragraph
        </button>
        {this.state.isParagraphVisible && <p>This is the paragraph.</p>}
      </div>
    );
  }
}

export default ToggleParagraph;
