import React, { Component } from "react";
import { AutoComplete, Icon } from "antd";
import axios from "axios";
import "antd/dist/antd.css";
import Stock from "./Stock";
import HomePost from "./HomePost";
import { Auth } from "../../accountPage/LoginPage/Auth";
import FeedBox from "./TweeBox";
import { CenterFocusStrong } from "@material-ui/icons";

export default class SearchBarStock extends Component {
  state = {
    search: "AAPL: Apple Inc.",
    dataSource: [],
    update: false,
    symbol: 'AAPL',
    fullName: "AAPL: Apple Inc."
  };

  render() {

    const clearState = (e) => {
      this.setState({ dataSource: [] });
      this.setState({ symbol: e.split(":")[0], fullName: e });
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

    const handleUpdate = () => {
      this.setState({ update: !this.state.update });
      console.log(this.state.update);
    }

    return (
      <div className="container">
        <div style={{ padding: "10%", textAlign: "center" }}>
          <h2 style={{ color: "white", textAlign: "center" }}>Select a Ticker</h2>
          <br></br>
          <AutoComplete
            style={{ width: "50%" }}
            className="d"
            value={this.state.search}
            onChange={(e) => handleSearch(e)}
            onSelect={(e) => clearState(e)}
            dataSource={this.state.dataSource}
            placeholder="search Ticker"
          />
        </div>
        <div className="row">
          <div className="col">

            <Stock
              name={this.state.fullName}
              symbol={this.state.symbol}
              isClick={this.state.click}
            />
          </div>
          <div className="col">
            {/* <button className="text-dark d-flex justify-content-end" onClick={handleClickClick}>Show Related Posts</button> */}
            {this.props.auth &&
              <FeedBox handleUpdate={() => handleUpdate()} symbol={this.state.symbol} />
            }
            <br></br>
            <HomePost
              user={this.props.user}
              symbol={this.state.symbol}
              update={this.state.update}
            />

          </div>
        </div>
      </div>
    )
  }
}
