export function Intro() {
  return (
    <>
      <section className="flex-col md:flex-column flexmd:justify-between mt-16">
        <h1 className="text-3xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8">
          Oi, meu nome é
        </h1>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Caio Gouveia
        </h1>
        <h1 className="text-3xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8">
          sou dev já a algum tempo ...
        </h1>
      </section>
      <section className="flex-col md:flex-row flex items-center md:justify-between mb-16 md:mb-12">
        <h1 className="text-3xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8">
          <br />
          <br />
          Formação:
          <br />
          Superior - Faculdades ASSER Porto Ferreira - Sistemas de Informação
          <br />
          Pós - Fatece Pirassununga - Marketing Digital.
          <br />
          <br />
          <br />
          Já trabalhei em alguns lugares ...
        </h1>
      </section>
    </>
  );
}
