type LayoutProps = {
  children: React.ReactNode;
};

function Layout(props: LayoutProps) {
  return <div className="h-screen overflow-y-auto">{props.children}</div>;
}

export default Layout;
