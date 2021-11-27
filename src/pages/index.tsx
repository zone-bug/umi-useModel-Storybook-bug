interface componentProps {
  count?: number;
  plus?: () => void;
  minus?: () => void;
}

export default function CountPage({ count, plus, minus }: componentProps) {
  return (
    <div>
      <h1>计数器:{count}</h1>
      <button onClick={minus}>-</button>
      <button onClick={plus}>+</button>
    </div>
  );
}
