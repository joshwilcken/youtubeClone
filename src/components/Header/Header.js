import React, { Component } from "react";
import '../css/styles.css'

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div className="header">
        <img id='ham' src={require('../../images/if_menu-alt_134216.svg')} alt='hamburger'/>
        <img src={require('../../images/if_Youtube_106249.svg')} alt='Youtube Icon'/>
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
        <img id='upload' src={require('../../images/upload-button.svg')} alt='Upload'/>
        <img id='bell' src={require('../../images/bell.svg')} alt='bell'/>
        <img id='grid' src={require('../../images/keyboard-buttons-or-visualization-button-of-nine-squares.svg')} alt='grid'/>
        <img id='picture' src={require('../../images/myPicture.jpg')} alt='picture'/>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default Header;