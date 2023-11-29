import { Header, Sidebar, AuthModal } from "@/components";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="desktop:grid-cols-main mt-[96px] desktop:mt-[106px] desktop:grid">
        <Sidebar />
        {children}
      </main>
      <AuthModal />
    </>
  );
};

export default MainLayout;
