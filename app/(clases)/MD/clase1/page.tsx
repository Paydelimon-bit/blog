export default function Clase1(){
    return(
        <div className="pl-2">
        <h1>Recordar:</h1>
        <p>Digrafo de una relacion: a-{">"}b indice aRb</p>
        <p>Tipos:</p>
        <ul>
            <li>Reflexiva</li>
            <li>Simetrica:Con que un solo elemento no sea simetrico</li>
            <li>Antisimetrica: Ningun elemento puede ser simetrico</li>
            <li>Transitiva</li>
        </ul>
<p>Ejemplos: Considere las siguientes relaciones sobre {"{"}1,2,3,4{"}"}; </p>
<p>R1={"{"}(1,1),(1,2),(2,1),(2,2),(3,4),(4,1),(4,4){"}"}</p>
<p>R2={"{"}(1,1),(1,2),(2,1){"}"}</p>
<p>R4={"{"}(2,1),(3,1),(3,2),(4,1),(4,2),(4,3){"}"}</p>
<p>R6={"{"}(3,4){"}"}</p>
<h2>Que propiedades tienen estas relaciones</h2>
<p>Solucion:</p>
        <ul>
            <li>R1</li>
            <li>No es reflexiva</li>
            <li>No es simetrica</li>
            <li>NO es antisimetrica</li>
            <li>No es transitiva</li>
        </ul>
         <ul>
            <li>R2</li>
            <li>No es reflexiva: contraejemplo 3 no se relaciona con 3</li>
            <li>Si es simetrica: 1R1={">"}1R1, 1R2={">"}2R1, 2R1={">"}1R2</li>
            <li>NO es antisimetrica: 1R2 y 2R1 pero 1≠2</li>
            <li>No es transitiva: Contraejemplo 2R1 y 1R2 pero 2 no se relacion con 2</li>
        </ul>
         <ul>
            <li>R4</li>
            <li>No es reflexiva: contraejemplo 1 no se relaciona con 1</li>
            <li>no es simetrica: 4R3≠{">"}3R4</li>
            <li>NO es antisimetrica:            </li>
            <li>No es transitiva: Contraejemplo 2R1 y 1R2 pero 2 no se relacion con 2</li>
        </ul>
         <ul>
            <li>R6</li>
            <li>No es reflexiva</li>
            <li>no es simetrica:</li>
            <li>Si es antisimetrica </li>
            <li>Si es transitiva: </li>
        </ul>

        <h2>Tarea:PDF2,PDF3, PDF4 </h2>
        <p>Tareas a revisar 8 de septiembre, examen 10 de septiembre</p>
        </div>
    )
}