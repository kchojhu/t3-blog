import { FC } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";

interface Props {}

const HomePage: FC<Props> = (props): JSX.Element => {
  return (
    <div className="flex h-screen w-full flex-col">
      <header className="flex h-20 w-full flex-row items-center justify-around border-b-[1px] border-gray-300 bg-white">
        <div>
          <IoReorderThreeOutline className="text-2xl text-gray-600" />
        </div>
        <div className="text-xl font-thin">Ultimate Blog App</div>
        <div className="flex items-center space-x-2">
          <div>
            <BsBell className="text-2xl text-gray-600" />
          </div>
          <div>
            <div className="h-5 w-5 rounded-full bg-gray-600"></div>
          </div>
          <div>
            <button className="flex items-center space-x-2 rounded border border-gray-200 px-4 py-2.5 transition hover:border-gray-900 hover:text-gray-900">
              <div>Write</div>
              <div>
                <FiEdit />
              </div>
            </button>
          </div>
        </div>
      </header>
      <section className="grid h-full w-full grid-cols-12 place-items-center">
        <main className="col-span-8 h-full w-full border-r border-gray-300">
          <div className="flex w-full flex-col space-y-4 py-10 px-24">
            <div className="flex w-full items-center space-x-4">
              <label
                htmlFor="search"
                className="relative w-full rounded-full border border-gray-900"
              >
                <div className="absolute left-2 flex h-full items-center">
                  <CiSearch />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="w-full rounded-full py-1 px-4 pl-7 text-sm outline-none placeholder:text-xs placeholder:text-gray-300"
                  placeholder="Search..."
                />
              </label>
              <div className="flex w-full items-center justify-end space-x-4">
                <div>My topics:</div>
                <div className="flex items-center space-x-2">
                  {Array.from({ length: 4 }).map((_, i) => {
                    return (
                      <div
                        key={i}
                        className="rounded-3xl bg-gray-200/50 px-4 py-2"
                      >
                        tag {i}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-between border-b border-gray-300 pb-8">
              <div>Articles</div>
              <div>
                <button className="flex items-center space-x-2 rounded-3xl border border-gray-300 p-4 py-1.5 font-semibold">
                  <div>Following</div>
                  <div>
                    <HiChevronDown className="text-xl" />
                  </div>
                </button>
              </div>
            </div>
            <div className="flex w-full flex-col justify-center space-y-8">
              {Array.from({ length: 5 }).map((_, i) => {
                return (
                  <div
                    key={i}
                    className="group flex flex-col space-y-4 border-b border-gray-300 pb-4 last:border-none"
                  >
                    <div className="flex space-x-2 text-sm">
                      <div className="h-10 w-10 items-center rounded-full bg-gray-400"></div>
                      <div>
                        <p className="font-semibold">
                          Kevin Cho &#x2022; 22 Dec. 2022
                        </p>
                        <p>Founder, teacher & developer</p>
                      </div>
                    </div>
                    <div className="grid w-full grid-cols-12 gap-4">
                      <div className="col-span-8 flex flex-col space-y-4">
                        <p className="text-2xl font-bold text-gray-800 decoration-indigo-400 group-hover:underline">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aspernatur, aut?
                        </p>
                        <p className="text-sm text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ex harum aliquid praesentium deserunt ab,
                          blanditiis perferendis commodi incidunt repellendus
                          repellat possimus amet, quidem totam reprehenderit
                          aspernatur quasi ullam cumque quos debitis accusamus
                          sed tempore nesciunt maiores? Aut velit deleniti ipsam
                          quia voluptates perspiciatis alias ratione illo
                          provident, optio molestiae! Tenetur soluta quasi sequi
                          fugiat sit unde dolore aliquid maxime voluptas!
                        </p>
                      </div>
                      <div className="col-span-4">
                        <div className="h-full w-full rounded-xl bg-gray-200 transition duration-300 hover:scale-105 hover:shadow-xl"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex w-full items-center justify-start space-x-4">
                        <div>My topics:</div>
                        <div className="flex items-center space-x-2">
                          {Array.from({ length: 4 }).map((_, i) => {
                            return (
                              <div
                                key={i}
                                className="rounded-3xl bg-gray-200/50 px-4 py-2"
                              >
                                tag {i}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
        <aside className="col-span-4 flex h-full w-full flex-col space-y-4 p-6">
          <div>
            <h3 className="my-4 text-lg font-semibold">
              People you might be interested
            </h3>
            <div className="flex flex-col space-y-5 p-6">
              {Array.from({ length: 4 }).map((_, i) => {
                return (
                  <div
                    key={i}
                    className="flex flex-row items-center space-x-5 "
                  >
                    <div className="h-10 w-10 flex-none rounded-full bg-gray-300"></div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">
                        lorem ipsum
                      </div>
                      <div className="text-xs">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Minima tempora quisquam blanditiis earum
                        voluptates iste illo officia. Quasi sapiente eligendi
                        sunt animi cupiditate illo, provident laudantium!
                        Voluptas enim itaque aliquam.
                      </div>
                    </div>
                    <div>
                      <button className="flex items-center space-x-2 rounded border border-gray-200 px-4 py-2.5 transition hover:border-gray-900 hover:text-gray-900">
                        <div>Follow</div>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="my-4 text-lg font-semibold">Your reading list</h3>
            <div className="flex flex-col space-y-8">
              {Array.from({ length: 4 }).map((_, i) => {
                return (
                  <div key={i} className="flex items-center space-x-6 group">
                    <div className="h-full w-2/5 rounded-xl bg-gray-300 aspect-square"></div>
                    <div className="flex w-3/5 flex-col space-y-2">
                      <div className="text-lg font-semibold group-hover:underline decoration-indigo-600">Lorem ipsum dolor sit amet.</div>
                      <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Recusandae, dolor!
                      </div>
                      <div className="flex space-x-1 items-center w-full">
                        <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                        <div>Kevin Cho &#x2022;</div>
                        <div>22 Dec. 2022</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default HomePage;
