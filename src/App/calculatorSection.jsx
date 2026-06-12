
import { useState } from "react";
import CalculatorList from "./calculatorList.jsx";


function CalculatorSection() {

  var arrayRequirements = [
    {
      subnetName: "Subnet",
      hosts: 50,
      description: ""
    }
  ]
  var [requirements, setRequirements] = useState(arrayRequirements)

  return (
    <>
      <div id="calculator" className="calculator">
        <div className="calculator-inner">
          <p className="calculator-title">Calculadora VLSM</p>
          <p className="calculator-description text-muted">Diseña subnets eficientes para una optima utilizacion del espacio de las direcciones de red .</p>
          <p className="calculator-subtitle">Configuración de red</p>

          <div className="input-user">
            <InputNetwork/>

            <InputCIDR/>
          </div>

          <AddSubnetButton
            setRequirements={setRequirements}
            requirements={requirements}
          />

          <div id="calculator-list" className="calculator-list">
            {
              requirements.map( (requirement, index) => (
                <CalculatorList
                  key={index}
                  index={index + 1} // para comenzar en 1
                  subnetName={requirement.subnetName + " " + (index + 1)}
                  hosts={requirement.hosts}
                  description={requirement.description}
                />
              ))
            }
          </div>

          <div id="calculator-information"></div>
          <div id="calculator-results"></div>
        </div>
      </div>
    </>
  );
}

export default CalculatorSection

function InputNetwork() {
  return (
      <div>
        <label htmlFor="network-address">Dirección de red</label>
        <br/>
        <input id="network-address" className="input-box" type="text" value="192.168.1.0" placeholder="192.168.1.0"/>
        <br/>
        <label id="network-address-error" htmlFor="network-address"></label>
      </div>
  );
}

function InputCIDR() {
  const [cird, setCird] = useState(24)

  function changeCIDR(event) {
    var value = event.target.value

    value = value.replace(/[a-z]/i, "")

    if (value > 0 && value < 33) {
      setCird(value)

    } else {
      setCird(24)
    }
  }

  return (
    <>
      <div className="cidr-input">
        <p>Notacion CIDR</p>
        <div className="input-center">
          <h3 id="cidr-information"></h3>
          <br/>
          <input id="cidr" className="input-box cidr" type="range" min="1" max="32" value={cird} onChange={changeCIDR}/>
          <input id="cidr-input-box" className="input-box cidr" type="text" value={cird} onChange={changeCIDR}/>
        </div>
      </div>
    </>
  );
}


function AddSubnetButton( { setRequirements, requirements } ) {
  return (
    <div className="requirements-title">
      <p className="requirements-subtitle">Requerimientos de Subnet</p>
      <button id="add-subnet" className="add-subnet" type="button" onClick={() => {
        setRequirements([...requirements, {
            subnetName: "Subnet",
            hosts: 50,
            description: ""
        }])
      }}>Agregar Subnet</button>
    </div>
  );
}

