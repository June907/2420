import React,{Component} from "react";
import { AutoComplete, Icon } from "antd";
import axios from "axios";
import "antd/dist/antd.css";
import Stock from "./Stock";

export default class SearchBarStock extends Component {
  state = {
    search: "AAPL: Apple Inc.",
    dataSource: [],
    click:false
  };

  render() {
    const clearState = () => {
      this.setState({ dataSource: [] });
      this.setState({click:!this.state.click});
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
    return (

      
      
      <div className="container">

          <div style={{ padding: "10%", marginLeft: "5%" }}>

          <AutoComplete
          style={{ width: "90%" }}
          className="d"
          value={this.state.search}
          onChange={(e) => handleSearch(e)}
          onSelect={clearState}
          dataSource={this.state.dataSource}
          placeholder="search Ticker"
        />
      </div>
          <Stock
            name={this.state.search}
            symbol={this.state.search.substring(0,this.state.search.indexOf(":"))}
            isClick={this.state.click}
          />
          </div>
          )
          }
  }
