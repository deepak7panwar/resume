export const SideBar = ({ list }) => {
  const ListValue = list
    .sort((a, b) => b.percentage - a.percentage)
    .map((data) => (
      <Progress
        key={data.name}
        data={data.name}
        percentage={`${data.percentage}%`}
      ></Progress>
    ));
  return (
    <div className="flex flex-col m-10 w-3/12">
      <aside className="flex flex-col mt-5">{ListValue}</aside>
    </div>
  );
};
export const Progress = ({ data, percentage }) => {
  const divStyle = {
    width: percentage,
  };
  return (
    <div className="w-full my-1">
      <div className="rounded shadow w-full bg-grey-light">
        <div
          style={divStyle}
          className="rounded bg-blue-800 text-xs leading-none py-1 text-center text-white font-semibold"
        >
          {data} {percentage}
        </div>
      </div>
    </div>
  );
};
