const Counter = ({ counter, onClickDecrement }) => {
  return (
    <section className="d-flex gap-2">
      <button
        onClick={() => { onClickDecrement(counter.id) }}
        className="btn btn-primary">-</button>
      <p className="btn btn-warning mb-0">{counter.value}</p>
      <button className="btn btn-primary">+</button>
    </section>
  );
}

export default Counter;