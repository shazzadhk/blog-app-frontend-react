import NavigationMenu from "./NavigationMenu";


const Layout = ({children}) => {
    return(
        <div className="container-fluid p-0 m-0">
            <NavigationMenu/>
            {children}
            <h1>This is Footer of this Blog Website</h1>
        </div>
    )
};
export default Layout;