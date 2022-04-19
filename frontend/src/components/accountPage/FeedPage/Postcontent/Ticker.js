import React,{Component} from "react";
import { AutoComplete, Icon } from "antd";
import axios from "axios";
import "antd/dist/antd.css";

export default class Ticker extends Component {
  state = {
    search: "",
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
          <div style={{marginLeft: "5%" }}>
          <AutoComplete
          style={{ width: "90%" }}
          className="d"
          value={this.state.search}
          onChange={(e) => handleSearch(e)}
          onSelect={clearState}
          dataSource={this.state.dataSource}
          placeholder="Tag: "
        />
      </div>
      
          </div>
        )
    }
}