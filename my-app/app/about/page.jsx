import Link from 'next/link'

function PageName()
{
    return (
        <div>
            <p>About</p>
            <Link href='./dasboard'>Dashboard</Link>
        </div>
    )
}

export default PageName;