import { useState } from "react";
import type { IWorkOrder } from "../components/interfaces/WorkOrders";

const SearchWorkOrder: React.FC = () => {

  const [workOrderNumber, setWorkOrderNumber] = useState<number | ''>('');
  const [clientName, setClientName] = useState('');
  const [results, setResults] = useState<IWorkOrder[]>([]);

  const [plate, setPlate] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    const regex = /^[A-Z]{0,3}( - )?[0-9]?[A-Z]?[0-9]{0,2}$/;

    if (regex.test(value) || value === '') {
      setPlate(value);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    const stored = localStorage.getItem("workOrders")
    if (!stored) return;

    const allOrders: IWorkOrder[] = JSON.parse(stored)

    const filtered = allOrders.filter((order) => {
      const matchPlate = plate ? order.plate.includes(plate) : true;
      const matchNumber = workOrderNumber !== '' ? order.workOrder === workOrderNumber : true;
      const matchName = clientName ? order.clientName.toLowerCase().includes(clientName.toLowerCase()) : true;

      return matchPlate && matchNumber && matchName;

    })
    setResults(filtered)
  }

  return (
    <div className="w-[80%] ml-[10%] mt-[10%] grid dark:bg-white">
      <form onSubmit={handleSearch}>
        <h1>Buscar OS.:</h1>
        <input
          className="w-full border p-2 rounded mb-8"
          placeholder="Digite o número da O.S."
          type="number"
          value={workOrderNumber}
          onChange={(e) => setWorkOrderNumber(e.target.value === '' ? '' : Number(e.target.value))} />

        <h1>Buscar Placa:</h1>
        <input
          type="text"
          className="w-full border p-2 rounded mb-8"
          value={plate}
          onChange={handleChange}
          placeholder="ABC-1D23" />

        <h1>Buscar por nome:</h1>
        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Digite o nome"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)} />

        <button
          type="submit"
          className="border rounded mt-8 p-2 bg-red-700 text-white text-center w-full"
        >
          Buscar
        </button>
      </form>

      {results.length > 0 ? (
        <div className="mt-8">
          <h2>Resultados:</h2>
          <ul className="space-y-4">
            {results.map((order) => (
              <li key={order.workOrder} className="border p-4 rounded bg-gray-100">
                <p><strong>OS:</strong> {String(order.workOrder).padStart(6, '0')}</p>
                <p><strong>Placa:</strong> {order.plate}</p>
                <p><strong>Cliente:</strong> {order.clientName}</p>
                <p><strong>Modelo:</strong> {order.model}</p>
                <p><strong>Data de entrada:</strong> {new Date(order.entryDate).toLocaleDateString()}</p>
                <p><strong>Prazo de entrega:</strong> {new Date(order.deliveryDate).toLocaleDateString()}</p>
                <p><strong>Descrição:</strong> {order.description}</p>
                <p><strong>Orçamento:</strong> R$ {order.budget.toFixed(2)}</p>
                <p><strong>Valor pago:</strong> R$ {order.paidValue.toFixed(2)}</p>
                <p><strong>Mecânico:</strong> {order.mechanic}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-8">Nenhum resultado encontrado.</p>
      )}

    </div>
  )

}

export default SearchWorkOrder;