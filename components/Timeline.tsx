import ReactMarkdown from "react-markdown/with-html";
export const Timeline = ({ experience }) => {
  const ListItem = experience.map((exp) => {
    const { company, link, jobTitle, dates, description } = exp;
    return (
      <li className="mb-2">
        <div className="flex items-center mb-1">
          <div className="bg-gray-500 rounded-full h-8 w-8"></div>
          <div className=" text-xl flex-1 ml-4 font-medium font-semibold">{dates}</div>
        </div>
        <section>
          <div className="ml-12">
            <h3 className="text-xl font-semibold text-gray-800">
              {company}
              &nbsp;
              <a
                href={link}
                className="underline text-blue-500 hover:text-blue-800"
              >
                ({link})
              </a>
            </h3>

            <p className="text-xl font-semibold text-gray-800">{jobTitle}</p>
            <ReactMarkdown
              escapeHtml={false}
              source={description}
            ></ReactMarkdown>
          </div>
        </section>
      </li>
    );
  });
  return (
    <div className="relative m-8">
      <div
        className="border-r-2 border-gray-500 absolute h-full top-0"
        style={{ left: "15px" }}
      ></div>
      <ul className="list-none m-0 p-0">{ListItem}</ul>
    </div>
  );
};
