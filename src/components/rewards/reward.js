import { useState } from "react";
import HoldingForDay from "./holdingForDay";

//TODO need to pass as props
const APIKEY = "ckey_744b3bfabf6a4e84a7a182ab71c";
const baseURL = "https://api.covalenthq.com/v1";
const address = "0xF37955134Dda37eaC7380f5eb42bce10796bD224";
const contract_address = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
const chain_id = 1;

export default function Rewards() {
  const [holdings, setHoldings] = useState([]);
  const [averageBalanceForWeek, setAverageBalanceForWeek] = useState(0);
  const [weekStartNumber, setWeekStartNumber] = useState(0);
  const [currentDateNumber, setCurrentDate] = useState(0);

  async function getHistoricalValueOverTime() {
    const testurl = new URL(
      `${baseURL}/${chain_id}/address/${address}/portfolio_v2/?key=${APIKEY}`
    );
    console.log("iteracting");
    const response = await fetch(testurl);
    const result = await response.json();
    const data = result.data;
    console.log(data);
    let contract;
    let number;
    data.items.map((item) => {
      if (item.contract_address === contract_address) {
        contract = item;
      }
    });

    // TODO Fix it with more appropriate way
    for (let i = 0; i < data.items.length; i++) {
      if (data.items[i].contract_address === contract_address) {
        number = i;
      }
    }

    let avgBalance = 0;
    const currentDate = new Date().toJSON().slice(0, 10);
    const weekStartNumber = monday(currentDate);
    setWeekStartNumber(weekStartNumber);
    const currentDateNumber = currentDate.slice(8, 10);
    setCurrentDate(currentDateNumber);
    const daysPassedFromWeekStart = currentDateNumber - weekStartNumber;

    data.items[number].holdings.map((holding) => {
      if (
        parseFloat(holding.timestamp.slice(8, 10)) >= weekStartNumber &&
        parseFloat(holding.timestamp.slice(8, 10)) < currentDateNumber
      ) {
        console.log(holding.timestamp.slice(8, 10));
        avgBalance += parseFloat(
          (parseFloat(holding.close.balance) +
            parseFloat(holding.open.balance)) /
            2
        );
      }
    });
    setHoldings(contract.holdings);
    avgBalance = avgBalance / 10 ** 18 / daysPassedFromWeekStart;
    setAverageBalanceForWeek(avgBalance);
  }

  function monday(d) {
    d = new Date(d);
    let day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 1);
    const data = new Date(d.setDate(diff));
    const dataInNumber = data.toString().slice(7, 10);
    return dataInNumber;
  }

  return (
    <>
      <div className="md:w-1/20 flex items-center justify-center pb-6 md:py-0">
        <div className="mt-20 max-w-2xl rounded-lg bg-white px-8 py-4 shadow-md dark:bg-gray-800">
          <div className="mt-2 mb-4">
            <p className="text-2xl font-bold text-gray-700 hover:text-gray-600 dark:text-white dark:hover:text-gray-200 ">
              Get your holdings for past Week
            </p>
            //TODO add styling for button
            <button onClick={getHistoricalValueOverTime}>Get Holdings</button>
            <div>
              Hey this is the list
              <ul>
                {holdings.map((holding) => (
                  <HoldingForDay
                    key={holding.timestamp}
                    timestamp={holding.timestamp}
                    //TODO fix amounts,pass only one amount
                    amountClose={holding.close.balance}
                    amountOpen={holding.open.balance}
                    currentDateNumber={currentDateNumber}
                    weekStartNumber={weekStartNumber}
                  />
                ))}
              </ul>
              //TODO move to another component Average Balance for Week is{" "}
              {averageBalanceForWeek.toFixed(3)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
