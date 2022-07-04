interface TotalProps {
  total: string;
}

const Total = ({ total }: TotalProps): JSX.Element => (
  <div id="total">{total}</div>
);

export default Total;
