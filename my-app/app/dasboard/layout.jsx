function LayoutFunction({children})
{
    return(
        <section>
            <h1>Header</h1>
                {children}
            <h1>Footer</h1>
        </section>
    )
}

export default LayoutFunction;