  
 import Card from "./Card";
 function Tours({tours ,removetour}){
    console.log(tours);
    return(
<div>
    <div>
        <h2>Plan With Deepak </h2>
        </div>
    <div>
        {
            tours.map( function (tours) {
                return <Card {...tours} removetour={removetour}></Card>;

            }
            )
        }
    </div>

</div>
    );
 }
 export default Tours;