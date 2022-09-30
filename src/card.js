//component name should always start with caps
//component should always return something
//component should always return one single element


function Card(props){
    return <div className="col">
    <div className="card mb-4 rounded-3 shadow-sm">
      <div className="card-header py-3">
        <h4 className="my-0 fw-normal">{props.card.planName}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">${props.card.price}<small className="text-muted fw-light">/mo</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
          {
            props.card.features.map((item)=>{
              return <li>{item.name}</li>
            })
          }
        </ul>
        <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
      </div>
    </div>
  </div>
}

export default Card;