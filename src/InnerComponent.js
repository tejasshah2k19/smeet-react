function Outer(){

    
    function Inner(){
        return(
            <h2>Inner</h2>
        );
    }
    return(
        <div>
        <h2>Outer</h2>
         {<Inner/>}
         </div>
    );

}

export default Outer;
