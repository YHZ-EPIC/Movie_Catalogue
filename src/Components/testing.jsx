/* eslint-disable react/prop-types */
export default function Moviez( {myData} ) {
    const title = myData.Title;
    console.log( "Component Result : ", title );
  return (
    <div>
        <h1>{title}</h1>
    </div>
  )
}
