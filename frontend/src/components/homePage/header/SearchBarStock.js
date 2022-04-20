import React, { Component } from "react";
import { AutoComplete, Icon } from "antd";
import axios from "axios";
import "antd/dist/antd.css";
import Stock from "./Stock";
import HomePost from "./HomePost";

export default class SearchBarStock extends Component {
  state = {
    search: "AAPL: Apple Inc.",
    dataSource: [],
    click: false,
    symbol: 'AAPL'
  };

  render() {
    var isClick = false;

    const clearState = (e) => {
      this.setState({ dataSource: [] });
      isClick = !isClick;
      this.setState({ symbol: e.split(":")[0] });
    };
    const getTickerFromAPi = async (e) => {
      const response = await axios.get(
        `https://ticker-2e1ica8b9.now.sh/keyword/${e}`
      );
      const ArraysofData = response.data.map((f) => [f.symbol + ": " + f.name]);
      const FlatArray = [].concat(...ArraysofData);

      this.setState({ dataSource: FlatArray });
    };

    const handleSearch = (e) => {
      if (e) {
        this.setState({ search: e }, () => getTickerFromAPi(e));
      } else {
        this.setState({ search: e });
      }
    };
    const handleClick = () => {
      // this.setState({ click: !this.state.click });
      isClick = !isClick;
    }
    const handleClickClick = () => {
      this.setState({ click: !this.state.click });
      this.setState({ click: !this.state.click });

    }
    return (
      <div className="container">

        <div style={{ padding: "10%", marginLeft: "5%" }}>
          <AutoComplete
            style={{ width: "90%" }}
            className="d"
            value={this.state.search}
            onChange={(e) => handleSearch(e)}
            onSelect={(e) => clearState(e)}
            dataSource={this.state.dataSource}
            placeholder="search Ticker"
            onClick={handleClick}
          />
        </div>
        <div className="row">
          <div className="col">

            <Stock
              name={this.state.search}
              symbol={this.state.symbol}
              isClick={this.state.click}
            />
          </div>
          <div className="col">
            {/* <button className="text-dark d-flex justify-content-end" onClick={handleClickClick}>Show Related Posts</button> */}
            <HomePost
              symbol={this.state.symbol}
            // isClick={isClick}
            />
          </div>
        </div>
      </div>
    )
  }
}
