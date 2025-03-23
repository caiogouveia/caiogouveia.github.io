export function Intro() {
  return (
      <section style={{paddingBottom: "20px"}}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Gravatar />
          <div style={{display: "flex", flexDirection: "column"}}>
          <h3>
            Oi, meu nome é
          </h3>
          <h1 style={{marginTop: "20px", marginBottom: "10px"}}>
            Caio Gouveia
          </h1>
          </div>
        </div>
      </section>
  );
}

// <h1 className="text-3xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8">
//   sou DEV já a algum tempo ...
//   <br />
//   e... já trabalhei em alguns lugares ...
// </h1>
export function Formacao() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mb-16 md:mb-12">
      <h1 className="text-3xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8">
        <br />
        Formação:
        <br />
        Superior - Faculdades ASSER Porto Ferreira - Sistemas de Informação
        <br />
        Pós - Fatece Pirassununga - Marketing Digital.
        <br />
      </h1>
    </section>
  );
}

const Gravatar = () => {
  const gravatarHash = "13c6a35422eda84068043491eebd0c67";
  const styles = {
    image: {
      height: "100%",
      width: "auto",
    },
  };

  return (
    <div className={"border-gradient-purple"}>
      <img
        style={styles.image}
        src={`https://gravatar.com/avatar/${gravatarHash}`}
      />
    </div>
  );
};
