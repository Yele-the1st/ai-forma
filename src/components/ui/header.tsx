import React from "react";
import { auth, signOut } from "@/auth";
import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";
import { LoginButton } from "../auth/login-button";
import { LogoutButton } from "../auth/logout-button";

type Props = {};

// function SignOut() {
//   return (
//     <form
//       action={async () => {
//         "use server";
//         await signOut();
//       }}
//     >
//       <Button
//         variant={"outline"}
//         type="submit"
//       >
//         Sign out
//       </Button>
//     </form>
//   );
// }

const Header = async (props: Props) => {
  const session = await auth();

  return (
    <header className="border-b bottom-1">
      <nav className="px-4 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <h1 className=" text-xl font-semibold">AI Former</h1>
          <div>
            {session?.user ? (
              <div className="flex items-center gap-4">
                {session.user.name && session.user.image && (
                  <Image
                    src={session.user.image}
                    alt={session.user.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
                <Link href="/view-forms">
                  <Button>Dashboard</Button>
                </Link>
                <LogoutButton>
                  <Button
                    variant={"outline"}
                    size={"default"}
                  >
                    Sign Out
                  </Button>
                </LogoutButton>
              </div>
            ) : (
              <LoginButton
                asChild
                mode="modal"
              >
                <Button size={"default"}>Sign In</Button>
              </LoginButton>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
