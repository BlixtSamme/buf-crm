
function SummaryList(props: {data: string[]}) {
  return (
    <div className="card w-96 h-64 bg-secondary grid-cols-1">
      {props.data.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  )
}

export default SummaryList;