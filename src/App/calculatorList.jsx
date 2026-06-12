import { useState } from "react";


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

  const [subnetNameValue, setSubnetNameValue] = useState(subnetName)
  const [hostsValue, setHostsValue] = useState(hosts)

  function changeHosts(event) {
    var value = event.target.value

    var newValue = value.replace(/\D+/g, "")

    if (newValue < 1) {
      setHostsValue(1)
      return
    }

    setHostsValue(newValue)
  }

  function changeSubnetName( event ) {
    var value = event.target.value

    setSubnetNameValue(value)
  }

  return (
    <div className="first-line">
      <input className="subnet-input" type="text" placeholder={ subnetName } value={ subnetNameValue } onChange={ changeSubnetName }/>
      <p className="requirements-text">Cantidad Hosts: </p>
      <input className="number-hosts" type="text" placeholder="50" value={ hostsValue } onChange={ changeHosts }/>
      <button className="delete-button" type="button">
        <img id="trash_icon" className="trash_icon"/>
      </button>
    </div>
  )
}

function SecondLine( { description } ) {

  const [descriptionValue, setDescriptionValue] = useState(description)

  function changeDescription(event) {
    var value = event.target.value

    setDescriptionValue(value)
  }

  return (
    <div className="second-line">
      <input className="description" type="text" placeholder="Descripcion (opcional)" value={ descriptionValue } onChange={ changeDescription }/>
    </div>
  );
}
