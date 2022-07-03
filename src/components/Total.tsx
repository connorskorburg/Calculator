interface TotalProps {
  total: string;
}

const Total = ({ total }: TotalProps): JSX.Element => (
  <div className="total">{total}</div>
);

export default Total;
