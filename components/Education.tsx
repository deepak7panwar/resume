import { FunctionComponent } from "react";

export const Education:FunctionComponent = () => {
  return (
    <section className="edu-section">
      <div className="blue-bg">
        <div>
          {/* <!--first section--> */}
          <div className="flex timeline">
            <div className="w-1/6 col-2">
              <div className="corner right-bottom"></div>
            </div>
            <div className="w-2/3">
              <hr />
            </div>
            <div className="w-1/6 col-2">
              <div className="corner top-left"></div>
            </div>
          </div>
          <div className="flex items-center how-it-works">
            <div className="flex justify-center w-1/6 col-2 text-center bottom">
              <div className="circle">1</div>
            </div>
            <div className="w-1/2">
              <h5 className="underline">
                {" "}
                Masters of Computer Applications (Part Time){" "}
              </h5>
              <p>SASTRA University Kumbakonam TN Department of Computers </p>
              <p>July 2014 - 2017 </p>
              <p>Overall GPA: 7.4/10</p>
            </div>
          </div>
          {/* <!--path between 1-2--> */}
          <div className="flex timeline">
            <div className="w-1/6 col-2">
              <div className="corner top-right"></div>
            </div>
            <div className="w-2/3">
              <hr />
            </div>
            <div className="w-1/6 col-2">
              <div className="corner left-bottom"></div>
            </div>
          </div>
          {/* <!--second section--> */}
          <div className="flex items-center justify-end how-it-works">
            <div className="w-1/2 text-right">
              <h5 className="underline">
                Bachelors of Science Electronics Honors (Full time)
              </h5>
              <p>University of Delhi Department of Electronics</p>
              <p>July 2010 - 2013 Overall </p>
              <p>GPA: 8.4/10</p>
            </div>
            <div className="flex justify-center w-1/6 col-2 text-center full">
              <div className="circle">2</div>
            </div>
          </div>
          {/* <!--path between 2-3--> */}
          <div className="flex timeline">
            <div className="w-1/6 col-2">
              <div className="corner right-bottom"></div>
            </div>
            <div className="w-2/3">
              <hr />
            </div>
            <div className="w-1/6 col-2">
              <div className="corner top-left"></div>
            </div>
          </div>
          {/* <!--third section--> */}
          {/* <div className="flex items-center how-it-works">
            <div className="flex justify-center w-1/6 col-2 text-center top">
              <div className="circle">3</div>
            </div>
            <div className="w-1/2">
              <h5 className="underline">
                Bachelors of Science Electronics (Honors) Department of
                Electronics
              </h5>
              <p>University of Delhi </p>
              <p>July 2010 - 2013 Overall </p>
              <p>GPA: 8.4/10</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
