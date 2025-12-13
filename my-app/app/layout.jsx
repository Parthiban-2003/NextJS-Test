import Page from './about/page';
import Contacts from './contact';

function Layout({children})
{
    return(
        <>
           <Page/> 
               {children}
           <Contacts/>
        </>
    )
}

export default Layout;