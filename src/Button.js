import React from 'react';
import './style.css'
class ScrollToTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.scrollfunction();
    });
  }

  scrollfunction() {
    if (window.pageYOffset > 400) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="scroll-to-top">
        {is_visible && (
          <button id = "myBtn" onClick={() => this.scrollToTop()}>Top</button>)}
      </div>
    );
  }
}
export default ScrollToTop;
