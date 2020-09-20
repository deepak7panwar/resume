import { Card } from "./Card";
import { SideBar } from "./SideBar";
import SVG from "react-inlinesvg";
import { Fragment } from "react";
import { Timeline } from "./Timeline";
import { Education } from "./Education";
import { FunctionComponent } from "react";
import { ITechnology } from "../interface";
import { IExperiance } from "../interface/IExperiance";
import { path } from "../utility/path";

const Layout: FunctionComponent<{
  data: {
    experiance: IExperiance[];
    basic: {
      name: any;
      address: any;
      email: any;
      contact: any;
      description: any;
      tags: string[];
    };
    technology: ITechnology[];
  };
}> = ({
  data = {
    experiance: [],
    technology: [],
    basic: {
      name: "",
      address: "",
      email: "",
      contact: "",
      description: "",
      tags: [],
    },
  },
}) => {
  const {
    experiance,
    basic: { name, address, email, contact, description, tags = [] },
    technology,
  } = data;

  const Tags = tags.map((d) => (
    <div className="rounded text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
      {d}
    </div>
  ));
  return (
    <div className="bg-gray-200">
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <main className="bg-white font-sans">
          {/* hero area */}
          <div className="h-128 bannerFondo gradient bg-left-top bg-auto bg-repeat-x">
            <div className="relative w-full text-center flex justify-center mt-24">
              <div className="border-8 border-white-600 py-8 px-16">
                <h1 className="font-bold text-5xl text-white ">{name}</h1>
              </div>
              <p
                className="absolute text-sm tracking-widest text-white"
                style={{
                  top: "83%",
                  boxSizing: "border-box",
                  padding: "10px 20px",
                  background: "white",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "20px",
                  textTransform: "uppercase",
                }}
              >
                {description}
              </p>
            </div>
          </div>
          {/* profile */}
          <div className="-mt-64 ">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
              <div className="p-2 sm:p-10 text-center cursor-pointer text-white">
                <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg transition duration-500">
                  <div className="relative h-40">
                    <div className="rounded absolute h-full w-full object-cover"></div>
                  </div>
                  <div className="relative shadow mx-auto h-48 w-48 -my-12 border-white rounded-full overflow-hidden border-4">
                    <img
                      className="object-cover w-full h-full"
                      src={`${path}/img.jpeg`}
                    ></img>
                  </div>
                  <div className="mt-8">
                    <div className="py-4 px-6">
                      <h1 className="text-2xl font-semibold text-gray-800">
                        {name}
                      </h1>
                      <p className="py-2 text-lg text-gray-700"></p>
                      <div className="flex items-center mt-4 text-gray-700">
                        <svg
                          viewBox="0 0 20 20"
                          className="h-6 w-6 fill-current"
                        >
                          <path d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"></path>
                        </svg>
                        <h1 className="px-2 text-sm">''</h1>
                      </div>
                      <div className="flex items-center mt-4 text-gray-700">
                        <svg
                          viewBox="0 0 20 20"
                          className="h-6 w-6 fill-current"
                        >
                          <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
                        </svg>
                        <h1 className="px-2 text-sm">{address}</h1>
                      </div>
                      <div className="flex items-center mt-4 text-gray-700">
                        <svg
                          viewBox="0 0 20 20"
                          className="h-6 w-6 fill-current"
                        >
                          <path d="M16.469,8.924l-2.414,2.413c-0.156,0.156-0.408,0.156-0.564,0c-0.156-0.155-0.156-0.408,0-0.563l2.414-2.414c1.175-1.175,1.175-3.087,0-4.262c-0.57-0.569-1.326-0.883-2.132-0.883s-1.562,0.313-2.132,0.883L9.227,6.511c-1.175,1.175-1.175,3.087,0,4.263c0.288,0.288,0.624,0.511,0.997,0.662c0.204,0.083,0.303,0.315,0.22,0.52c-0.171,0.422-0.643,0.17-0.52,0.22c-0.473-0.191-0.898-0.474-1.262-0.838c-1.487-1.485-1.487-3.904,0-5.391l2.414-2.413c0.72-0.72,1.678-1.117,2.696-1.117s1.976,0.396,2.696,1.117C17.955,5.02,17.955,7.438,16.469,8.924 M10.076,7.825c-0.205-0.083-0.437,0.016-0.52,0.22c-0.083,0.205,0.016,0.437,0.22,0.52c0.374,0.151,0.709,0.374,0.997,0.662c1.176,1.176,1.176,3.088,0,4.263l-2.414,2.413c-0.569,0.569-1.326,0.883-2.131,0.883s-1.562-0.313-2.132-0.883c-1.175-1.175-1.175-3.087,0-4.262L6.51,9.227c0.156-0.155,0.156-0.408,0-0.564c-0.156-0.156-0.408-0.156-0.564,0l-2.414,2.414c-1.487,1.485-1.487,3.904,0,5.391c0.72,0.72,1.678,1.116,2.696,1.116s1.976-0.396,2.696-1.116l2.414-2.413c1.487-1.486,1.487-3.905,0-5.392C10.974,8.298,10.55,8.017,10.076,7.825"></path>
                        </svg>
                        <h1 className="px-2 text-sm">
                          <a
                            target="_blank"
                            className="underline text-blue-500 hover:text-blue-800"
                            href={`mailto:${email}`}
                          >
                            {email}
                          </a>
                        </h1>
                      </div>
                      <p>{contact}</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t">
                    {Tags}
                  </div>
                </div>
              </div>
              <section></section>
              <section className="mt-64 flex justify-end w-100"></section>
            </div>
          </div>
          <section className="shadow-2xl">
            <h2 className="pb-3 pt-2 underline text-3xl">Education</h2>
            <Education></Education>
          </section>
          <section>
            <h2 className="pb-3 pt-2 underline text-3xl">Experiance</h2>
            <Timeline experience={experiance}></Timeline>
          </section>
          <section className="w-100 flex shadow-2xl">
            <SideBar list={technology}></SideBar>
            <div className="flex flex-wrap content-start flex-1">
              <TechnologyCard technology={technology}></TechnologyCard>
            </div>
          </section>
        </main>
        <footer>
          ©Deepak panwar {new Date().getFullYear()}, Built with Next.js
        </footer>
      </div>
    </div>
  );
};

const TechnologyCard: FunctionComponent<{ technology: ITechnology[] }> = ({
  technology,
}) => {
  return (
    <Fragment>
      {technology.map((d) => (
        <Card text={d.name} className="m-2" key={d.name}>
          <SVG
            baseURL="/"
            loader={<span>Loading...</span>}
            className="stroke-current text-purple-500 inline-block h-12 w-12"
            src={`${path}${d.path}`}
          ></SVG>
        </Card>
      ))}
    </Fragment>
  );
};
export default Layout;
