import CardPefil from "../layouts/CardPerfil" 

const UserPerfil = ()=>{
    return(
<>
<div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div style={{flexDirection: "column" }}>
        <h3>Nombre Usuario</h3>
        <h4> jorge gonzalez</h4>
        <h3>Email</h3>
        <h4>jorge@jorge.com</h4>
        <h3>Numero de telefono</h3>
        <h4>+54937041234</h4>
        <div
          style={{
            textAlign: "center",
            borderRadius: "1px",
            border: "2px solid black",
          }}
        >
          <p style={{}}>Editar Perfil</p>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <h3>Mapas de interes:</h3>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                width: "18rem"
              }}
                className="card"
                >
              <h3> Mapas de calor </h3>
            </div>
            <div
              style={{
                  width: "18rem"
                }}

                className="card"

            >
              <h3> Humedad Suelo </h3>
            </div>
            <div
               style={{
                width: "18rem"
              }}

              className="card"

            >
              <h3> Densidad Forestal</h3>
            </div>
          </div>
        </div>
        <div>
          <h3>Lugares de interes: </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <div
                 style={{
                    width: "18rem"
                  }}
    
                  className="card"
            >
              <h3>Formosa</h3>
              <h5>ubicacion: </h5>
            </div>
            <div
                  style={{
                    width: "18rem"
                  }}
    
                  className="card"
            >
              <h3> chaco </h3>
              <h5>Ubicacion: </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
</>
    )
}

export default UserPerfil;