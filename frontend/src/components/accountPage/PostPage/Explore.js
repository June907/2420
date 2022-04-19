import React,{Component} from "react";
import { AutoComplete, Icon } from "antd";
import Widgets from "../FeedPage/widget/widget";
import axios from "axios";
import "antd/dist/antd.css";
import ShowPost from "./ShowPost";
import Sidebar from "../FeedPage/Sidebar/Sidebar";
import "./Explore.css";
export default class Explore extends Component {

  state = {
    search: "",
    dataSource: [],
    click:false
  };

  render() {
    const clearState = () => {
      this.setState({ dataSource: [] });
      
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

    const handleClick=()=>{
      this.setState({click:!this.state.click});
    }
    const handleClickClick=()=>{
      this.setState({click:!this.state.click});
      this.setState({click:!this.state.click});

    }
    return (
      <div className="container main-layout">
        <Sidebar></Sidebar>
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
                onClick={handleClick}
              />
              <button onClick={handleClickClick}>Confirm</button>
            </div>
            
            <ShowPost
              name={this.state.search.substring(0,this.state.search.indexOf(":"))}
              isClick={this.state.click}
              ></ShowPost>
              
        </div>
        <Widgets></Widgets>
      </div>
    )
  }
}