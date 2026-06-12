

function CalculatorList( { index, subnetName, hosts, description } ) {
  return (
    <>
      <div className="calculator-requirements">

        <CircleIndex
          index={index}
        />

        <div className="requirements-lines">
          <FirstLine
            subnetName={subnetName}
            hosts={hosts}
          />

          <SecondLine
            description={description}
          />
        </div>
      </div>
    </>
  );
}

export default CalculatorList

function CircleIndex( { index } ) {
  return (
    <div className="circle">
      <p className="circle-index">{index}</p>
    </div>
  );
}

function FirstLine( { subnetName, hosts } ) {
  return (
    <div className="first-line">
      <input className="subnet-input" type="text" placeholder={ subnetName }/>
      <p className="requirements-text">Cantidad Hosts: </p>
      <input className="number-hosts" type="text" placeholder="50" value={ hosts }/>
      <button className="delete-button" type="button">
        <img id="trash_icon" className="trash_icon"/>
      </button>
    </div>
  )
}

function SecondLine( { description } ) {
  return (
    <div className="second-line">
      <input className="description" type="text" placeholder="Descripcion (opcional)" value={ description }/>
    </div>
  );
}
