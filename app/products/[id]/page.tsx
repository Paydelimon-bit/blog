interface IDProps{
    params:Promise<{id:string}>
}

export default async function ID({params}:IDProps){
    const {id}=await params
    return(
        <>
        <p>Estas en el ID:{id}</p>
        </>
    )
}