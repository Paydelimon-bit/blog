interface CategoryProps{
    params:Promise<{category:string,id:string}>
}

export default async function Category({params}:CategoryProps){

    const {category,id}=await params
    return (
        <>
        Estas en la pagina {category}, seccion {id}
        </>
    )
}