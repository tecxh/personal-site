import { PropsWithChildren } from "react"

interface PageContainerProps extends PropsWithChildren {
  pageHeader?: string;
}

export const PageContainer = ({ children, pageHeader }: PageContainerProps) => {
  return (
    <main role="main" className="p-4">
      {pageHeader && <h3>{pageHeader}</h3>}
      {children}
    </main>
  )
}
