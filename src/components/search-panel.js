import React from "react";

export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
    this.onUpdateChange = this.onUpdateChange.bind(this);
  }

  onUpdateChange(e) {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateChange(term);
  }

  render() {
    return (
      <input
        type="text"
        placeholder="search a post"
        className="form-control search-input"
        onChange={this.onUpdateChange}
      />
    );
  }
}
