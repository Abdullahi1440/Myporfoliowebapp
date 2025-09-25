import React from "react";

const Service = () => {
  return (
    <div className="bg-white flex-wrap   flex flex-col justify-center items-center mt-5 mb-20 sm:mb-30 w-full sm:text-lg  scroll-auto  dark:bg-gray-900 dark:text-white ">
      <h4 className="text-center font-bold mb-5 mt-5 uppercase text-3xl ">
        <span className="border-b border-purple-400">Available Service</span>{" "}
      </h4>
      <p className="text-center font-light mt-4 mb-4 py-5 px-5 text-3xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
        commodi quibusdam quidem fugiat eaque. Debitis ab quisquam iste,
        veritatis eaque iusto, excepturi sequi eos illo, sed quia aliquam ullam
        consectetur.
      </p>
      <div className=" flex  justify-center items-center container mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:mb-10">
          <div className="  rounded-xl  shadow-lg border border-purple-500 hover:shadow-amber-300   ">
            <div className=" flex flex-col  mt-5   ">
              <div className="rounded-xl overflow-hidden  items-center mx-auto ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-15 h-15 text-center text-purple-600 border-2 border-purple-500 rounded "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h5 className="text-2xl md:text-3xl font-semibold mt-3 uppercase text-center text-purple-600">
                Web Designing{" "}
              </h5>
              <p className="text-center text-2xl font-light text mt-3">
                . Earum unde itaque vel? Magni iste corrupti exercitationem
                eveniet eos dolores, quisquam numquam corporis ut placeat
                explicabo provident totam mollitia nulla ratione!
              </p>
            </div>
          </div>

          <div className="  rounded-xl  shadow-lg border border-purple-500 hover:shadow-amber-300   ">
            <div className=" flex flex-col  mt-5   ">
              <div className="rounded-xl overflow-hidden  items-center mx-auto ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-15 h-15 text-center text-purple-600 border-2 border-purple-500 rounded "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
              </div>
              <h5 className="text-2xl md:text-2xl font-semibold mt-3 uppercase text-center text-purple-600 dark:text-white">
                Full stack Development{" "}
              </h5>
              <p className="text-center text-2xl font-light text mt-3">
                . Earum unde itaque vel? Magni iste corrupti exercitationem
                eveniet eos dolores, quisquam numquam corporis ut placeat
                explicabo provident totam mollitia nulla ratione!
              </p>
            </div>
          </div>
          <div className="  rounded-xl  shadow-lg border border-purple-500  hover:shadow-amber-300 ">
            <div className=" flex flex-col p-5  ">
              <div className="rounded-xl overflow-hidden  items-center mx-auto ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-15 h-15 text-center text-purple-600 border-2 border-purple-500 rounded "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h5 className="text-3xl md:text-2xl font-semibold mt-3 uppercase text-center text-purple-700 dark:text-white">
                mobile Development
              </h5>
              <p className="text-center text-2xl font-light text mt-3">
                . Earum unde itaque vel? Magni iste corrupti exercitationem
                eveniet eos dolores, quisquam numquam corporis ut placeat
                explicabo provident totam mollitia nulla ratione!
              </p>
            </div>
          </div>
          <div className="  rounded-xl  shadow-lg border border-purple-500 hover:shadow-amber-300  ">
            <div className=" flex flex-col p-5  ">
              <div className="rounded-xl overflow-hidden  items-center mx-auto ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-15 h-15 text-center text-purple-600 border-2 border-purple-500 rounded  "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
              </div>
              <h5 className="text-2xl md:text-2xl font-semibold mt-3 uppercase text-center dark:text-white">
                
                databatabase Development
              </h5>
              <p className="text-center text-2xl font-light  mt-3">
                . Earum unde itaque vel? Magni iste corrupti exercitationem
                eveniet eos dolores, quisquam numquam corporis ut placeat
                explicabo provident totam mollitia nulla ratione!
              </p>
            </div>
          </div>
          <div className="  rounded-xl  shadow-lg border border-purple-500 hover:shadow-amber-300  ">
            <div className=" flex flex-col p-5  ">
              <div className="rounded-xl overflow-hidden  items-center mx-auto  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-15 h-15 text-center text-purple-600 border-2 border-purple-500 rounded  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h5 className="text-3xl md:text-2xl font-semibold mt-3 uppercase text-center text-purple-700 dark:text-white">
                Figma Design & Development{" "}
              </h5>
              <p className="text-center text-2xl font-light text mt-3">
                . Earum unde itaque vel? Magni iste corrupti exercitationem
                eveniet eos dolores, quisquam numquam corporis ut placeat
                explicabo provident totam mollitia nulla ratione!
              </p>
            </div>
          </div>
          <div className="  rounded-xl  shadow-lg border border-purple-500 hover:shadow-amber-300  ">
            <div className=" flex flex-col p-5  ">
              <div className="rounded-xl overflow-hidden  items-center mx-auto  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-15 h-15 text-center text-purple-600 border-2 border-purple-500 rounded  "
                  lass="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
              </div>
              <h5 className="text-3xl md:text-2xl font-semibold mt-3 uppercase text-center text-purple-700 dark:text-white">
                Odoo Implementation
              </h5>
              <p className="text-center text-2xl font-light text mt-3">
                . Earum unde itaque vel? Magni iste corrupti exercitationem
                eveniet eos dolores, quisquam numquam corporis ut placeat
                explicabo provident totam mollitia nulla ratione!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
