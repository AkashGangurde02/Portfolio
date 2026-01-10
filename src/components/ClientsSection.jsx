import './ClientsSection.css'

const ClientsSection = () => {
  const clients = [
    {
      id: 1,
      name: 'pipefy',
      services: 'UI/UX & Branding',
      year: '2022'
    },
    {
      id: 2,
      name: 'django',
      services: 'UI/UX & Branding',
      year: '2022'
    },
    {
      id: 3,
      name: 'rackspace',
      services: 'UI/UX & Branding',
      year: '2022'
    },
    {
      id: 4,
      name: 'portal',
      services: 'UI/UX & Branding',
      year: '2022'
    }
  ]

  return (
    <section className="clients-section">
      <div className="clients-container">
        <h2 className="clients-title">
          A visual partner for brands, companies, and agencies
        </h2>
        
        <div className="clients-grid">
          {clients.map((client) => (
            <div key={client.id} className="client-card">
              <h3 className="client-name">{client.name}</h3>
              <p className="client-services">{client.services}</p>
              <p className="client-year">{client.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
