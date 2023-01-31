const Input = (props) => {
  const { value, onChange, filteredData } = props;
  return (
    <div className="inputField">
      <input value={value} onChange={onChange} />
      <div className="result">
        {filteredData.length
          ? filteredData?.map((data) => <p>{data}</p>)
          : null}
      </div>
    </div>
  );
};

export default Input;
