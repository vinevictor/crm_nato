  'use client'

import { useSession } from "next-auth/react";
import Loading from "../loading";
import { Box } from "@chakra-ui/react";
import { redirect, useRouter } from "next/navigation";

export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  const { data: session } = useSession();
  const user = session?.user;
  const route = useRouter();

 

  if (!user) return <><Loading /></>
  return (
    <Box h={"100vh"} w={"100vw"} bg={"#f3f3f3"}>
      {user && children}
    </Box>
  )
}