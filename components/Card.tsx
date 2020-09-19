export const Card = ({ className = "", children, text }) => {
  const color = ["red", "orange","green","teal", "pink"];
  const colorArr = color.map((d) => `bg-${d}-500`);
  const rand = Math.random() * 10;
  const index = parseInt(`${rand}`, 10) % colorArr.length;
  const getHov = (index) => `hover:bg-${color[index]}-600`;
  return (
    <div
      className={`rounded overflow-hidden bg-gray-100 py-2 card-my`}
    >
      <div className="w-full flex justify-center">
        <div>{children}</div>
      </div>
      <div className="px-5 pt-2 flex">
        <p className="text-base text-1xl">{text}</p>
      </div>
    </div>
  );
};
