import React, {useState, useEffect} from "react";
import Plot from "react-plotly.js";

export default function Stock(){

  const[state,setState]=useState(
    {stockChartXValue:[],
    stockChartYValue:[]
  })

    function fetchStock(){
      const API_KEY="ZLPQ29WJVETRN2AF";
      let stockSymbol='AMZN';
      let API_Call=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&outputsize=compact&apikey=${API_KEY}`;
      let stockChartXValuesFunction=[];
      let stockChartYValuesFunction=[];
      fetch(API_Call)
        .then(function(response){
          return response.json();
        })
        .then(function(data){
          console.log(data);
          for(var key in data['Time Series (Daily)']){
            stockChartXValuesFunction.push(key);

            
            stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
          }

          setState({
            stockChartXValue:stockChartXValuesFunction,
            stockChartYValue:stockChartYValuesFunction

          })
        })


    }
    useEffect(()=>{
      fetchStock();},[] )



      return(
        <div>
        
          
   
            <Plot
                data={[
                  {
                    x: state.stockChartXValue,
                    y: state.stockChartYValue,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'green'},
                  },
                  
                ]}
                layout={ 
                  {width: 720, 
                  height: 440,
                  paper_bgcolor:"#000",
                  plot_bgcolor:"#000",
                  title: "Amazon",
                  font:{color:"#FFFFF7"},
                  hoverlabel:{bgcolor:"#FFFFF7"},
                  showlegend:false,
                  
                  
                  
                  
                   }}
                   config={{
                     displaylogo:false,
                     
                     displayModeBar: false
                   }}
  
                
                
                
              />
            
            </div>
      )


    





}