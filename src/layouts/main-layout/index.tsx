import React, { useContext } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { HiChevronDown, HiLogout } from "react-icons/hi";
import { signIn, signOut, useSession } from "next-auth/react";
import { GlobalContext } from "../../contexts/global-context-provider";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  const { data: sessionData, status } = useSession();
  const {isWriteModalOpen, setIsWriteModalOpen} = useContext(GlobalContext);
  return (
    <div className="flex h-screen w-full flex-col">
      <header className="flex h-20 w-full flex-row items-center justify-around border-b-[1px] border-gray-300 bg-white">
        <div>
          <IoReorderThreeOutline className="text-2xl text-gray-600" />
        </div>
        <div className="text-xl font-thin">Ultimate Blog App</div>
        {status === "authenticated" ? (
          <div className="flex items-center space-x-2">
            <div>
              <BsBell className="text-2xl text-gray-600" />
            </div>
            <div>
              <div className="h-5 w-5 rounded-full bg-gray-600"></div>
            </div>
            <div>
              <button onClick={() => setIsWriteModalOpen(true)} className="flex items-center space-x-2 rounded border border-gray-200 px-4 py-2.5 transition hover:border-gray-900 hover:text-gray-900">
                <div>Write</div>
                <div>
                  <FiEdit />
                </div>
              </button>
            </div>
            <div>
              <button onClick={() => signOut()} className="flex items-center space-x-2 rounded border border-gray-200 px-4 py-2.5 transition hover:border-gray-900 hover:text-gray-900">
                <div>Logout</div>
                <div>
                  <HiLogout />
                </div>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => signIn()}
              className="flex items-center space-x-2 rounded border border-gray-200 px-4 py-2.5 transition hover:border-gray-900 hover:text-gray-900"
            >
              Sign In
            </button>
          </div>
        )}
      </header>

      {children}
    </div>
  );
};

export default MainLayout;
