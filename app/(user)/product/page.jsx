const product = async (props) => { 
     
 const serarch = await props.searchParams
      console.log(serarch)
    return (
        <div>This is product page</div>
    )
}

export default product