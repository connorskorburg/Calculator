interface TotalProps {
  total: string;
}

const Total = ({ total }: TotalProps): JSX.Element => (
  <div data-testid="total" id="total">
    {total.slice(0, 9)}
  </div>
);

export default Total;
