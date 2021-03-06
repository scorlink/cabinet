var React = require("react");
var createReactClass = require('create-react-class');
var PageEl = require('./pageEl');

var Pager = createReactClass({
  handleClick: function(i,event) {
      event.preventDefault();
      this.props.onClick(i);
  },
    handleNext(event){
        event.preventDefault();
      this.props.navigate(true);
    },
    handlePrev(event){
        event.preventDefault();
        this.props.navigate(false);
    },

render: function() {
    var active = this.props.active;
    var pagination = this.props.nbp;
    var pageList = [];
    for (var i=1;i<=pagination;i++) {
        pageList.push(<PageEl active={i == active} key={i} nbr={i} onClick={this.handleClick.bind(this, i)}/>);
    }
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination pagination-sm">
          <li>
            <a href="#" aria-label="Previous" onClick={this.handlePrev}>
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {pageList}
          <li>
            <a href="#" aria-label="Next" onClick={this.handleNext}>
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
});
module.exports = Pager;
