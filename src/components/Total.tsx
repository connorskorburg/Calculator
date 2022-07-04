interface TotalProps {
  total: string;
}

const Total = ({ total }: TotalProps): JSX.Element => (
  <div data-testid="total" id="total">
    {total}
  </div>
);

export default Total;
