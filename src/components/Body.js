import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Tabla from "./Tabla";

export default function Body() {
  const [HeroDataTotal, setHeroDataTotal] = useState(null);
  const [HeroData, setHeroData] = useState(null);
  const [PuedeVolar, setPuedeVolar] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const DataFetch = await fetch(
        `http://157.245.138.232:9091/api/v1/test/superheroes?puedeVolar=${PuedeVolar}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const DataJson = await DataFetch.json();
      setHeroData(DataJson.data);
      setHeroDataTotal(DataJson.data);
    }
    fetchData();
  }, [PuedeVolar]);

  function handleChange(input) {
    setHeroData(
      HeroDataTotal.filter((heroes) =>
        heroes.nombre.toLowerCase().includes(input)
      )
    );
  }

  if (HeroData === null) {
    return (
      <div className="Error">
        <code>ERROR API</code>: hubo un error con obtener los datos de la API!
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <Grid container className="contenedor" spacing={2}>
            <Grid item xs={4} xm className="BuscadorGrid">
              <input
                className="Input"
                placeholder="Buscar por nombre..."
                onChange={(e) => handleChange(e.target.value)}
              />
              <div className="CheckBoxArea">
                <input
                  type="checkbox"
                  className="CheckBox"
                  checked={PuedeVolar}
                  onChange={(e) => setPuedeVolar(e.target.checked)}
                />{" "}
                Puede volar?
              </div>
            </Grid>
            <Grid item xs={8} className="TableGrid">
              {HeroData.length === 0 && <p>No se encuentran coincidencias</p>}

              {HeroData.length !== 0 && <Tabla HeroData={HeroData} />}
            </Grid>
          </Grid>
        </header>
      </div>
    );
  }
}
