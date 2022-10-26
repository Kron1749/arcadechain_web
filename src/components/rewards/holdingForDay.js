export default function HoldingForDay({
  timestamp,
  amountClose,
  amountOpen,
  currentDateNumber,
  weekStartNumber,
}) {
  const balanceClose = amountClose / 10 ** 18;
  const balanceOpen = amountOpen / 10 ** 18;
  const balance = ((balanceClose + balanceOpen) / 2).toFixed(3);
  const date = timestamp.slice(0, 10);
  if (
    parseFloat(timestamp.slice(8, 10)) >= weekStartNumber &&
    parseFloat(timestamp.slice(8, 10)) < currentDateNumber
  ) {
    return (
      <li>
        {/* <div>{}</div> */}
        <div>
          Average balance for date {date} is {balance}
        </div>
      </li>
    );
  }
}
