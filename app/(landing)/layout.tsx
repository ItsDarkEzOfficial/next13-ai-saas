import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Genesis',
    description: 'ИИ - новая реальность',
    icons: 'http://localhost:300/public/logo.png'
}

const LandingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="h-full bg-[#111827] overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">
        {children}
      </div>
    </main>
   );
}
 
export default LandingLayout;