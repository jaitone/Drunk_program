import React, { Component } from "react";
import ItemsList from "../Item/src/itemsList";

class DinningTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTable: "",
      isBusy: false,
      showTable: false,
      selectedTableItems: [],
    };
  }

  handleBookings = () => {
    setTimeout(() => {
      if (this.props.items.length >= 1) {
        this.setState({ isBusy: true });
      } else {
        this.setState({ isBusy: false });
      }
    }, 1000);
  };

  componentDidMount() {
    this.handleBookings();
  }

  onClickChangeTableList = () => {
    let selectedTableItems = [];
    selectedTableItems.push(this.props.items);
    this.setState({ selectedTable: this.props.number });
    this.setState({ selectedTableItems });
    this.setState({ showTable: !this.state.showTable });
  };

  render() {
    return (
      <div>
        <div style={{ margin: "10px", padding: "15px" }}>
          <button
            className={
              this.state.isBusy ? "btn-lg btn-danger" : "btn-lg btn-primary"
            }
            id="book-table"
            onClick={this.onClickChangeTableList}
          >
            {this.props.number}
          </button>
        </div>
        {this.state.showTable ? (
          <div
            style={{
              float: "right",
              borderStyle: "solid",
              borderColor: "coral",
              position: "relative",
            }}
          >
            <ItemsList
              listItems={this.state.selectedTableItems}
              tableNumber={this.state.selectedTable}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default DinningTable;
