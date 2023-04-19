import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";
import Dashboard from "./dashboard";

const Protected: NextPage = (): JSX.Element => {
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/auth/signin");
  }, [status]);

  if (status === "authenticated")
    return (
      <div>
        <Dashboard />
      </div>
    );

 

  return <div>loading</div>;
};

export default Protected;

// {JSON.stringify(data.user, null, 2)}
