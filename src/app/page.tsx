import prisma from "@/lib/db"

const page = async () => {
  const users = await prisma.user.findMany()
  console.log(users)
  return (
    // <Button variant="secondary">按钮</Button>
    <div>{JSON.stringify(users, null, 2)}</div>
  )
}

export default page 