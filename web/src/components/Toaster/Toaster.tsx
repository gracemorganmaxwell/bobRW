import { Toaster } from '@redwoodjs/web/toast'

const MainLayout = ({ children }) => {
  return (
    <>
      <Toaster />
      <main>{children}</main>
    </>
  )
}

export default MainLayout
