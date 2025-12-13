"use client"
import {useRouter} from 'next/navigation'

function PageSet()
{
    const Routers = useRouter();
    
    const RoutingPage = ()=>
    {
        Routers.push('./about')
    }
    return(
        <div>
            <button onClick={RoutingPage}>Back</button>
            <h1>
                Page Settings
            </h1>
        </div>
    )
}

export default PageSet;