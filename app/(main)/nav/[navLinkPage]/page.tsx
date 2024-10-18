import dynamic from "next/dynamic";

const NavLinkPages = ({ params }: { params: { navLinkPage: string } }) => {
  const Component = dynamic(
    () => import(`@/components/navLinkPages/${params.navLinkPage}`),
  );
  return <Component />;
};

export default NavLinkPages;
