import { useState, useEffect } from "react";
import type { IWorkOrder } from "../components/interfaces/WorkOrders";

const NewWorkOrder: React.FC = () => {

  const [workOrder, setWorkOrder] = useState<number>(1)
  const [plate, setPlate] = useState<string>('')
  const [clientName, setClientName] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [entryDate, setEntryDate] = useState<Date | null>(null);
  const [deliveryDate, setDeliveryDate] = useState<Date | null>(null);
  const [description, setDescription] = useState<string>('');
  const [budget, setBudget] = useState<number>(0);
  const [paidValue, setPaidValue] = useState<number>(0);
  const [mechanic, setMechanic] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setPlate(value)
    const regex = /^[A-Z]{0,3}( - )?[0-9]?[A-Z]?[0-9]{0,2}$/;

    if (regex.test(value) || value === '') {
      setPlate(value);
    }
  };

  useEffect(() => {
    const existingOrders = localStorage.getItem("workOrders");
    const ordersArray: IWorkOrder[] = existingOrders ? JSON.parse(existingOrders) : [];

    if (ordersArray.length > 0) {
      const lastOrderNumber = Math.max(...ordersArray.map(order => order.workOrder));
      setWorkOrder(lastOrderNumber + 1);
    } else {
      setWorkOrder(1);
    }
  }, []);

  const resetForm = () => {
    setPlate('');
    setClientName('');
    setModel('');
    setEntryDate(null);
    setDeliveryDate(null);
    setDescription('');
    setBudget(0);
    setPaidValue(0);
    setMechanic('');
  };

  const [successMessage, setSuccessMessage] = useState<string>('')

  const addNewWorkOrder = (e: React.FormEvent) => {
    e.preventDefault()

    const newWorkOrder: IWorkOrder = {

      workOrder,
      plate,
      clientName,
      model,
      entryDate: entryDate!,
      deliveryDate: deliveryDate!,
      description,
      budget,
      paidValue,
      mechanic
    }
    const existingOrders = localStorage.getItem("workOrders");
    const ordersArray: IWorkOrder[] = existingOrders ? JSON.parse(existingOrders) : [];

    ordersArray.push(newWorkOrder);
    localStorage.setItem("workOrders", JSON.stringify(ordersArray));

    setSuccessMessage('Ordem de Serviço salva com sucesso!')
    resetForm()

    setTimeout(() => {
      setSuccessMessage('');
      window.location.reload();
    }, 7000);

  }

  return (
    <div className="w-[96%] ml-[2%] mt-[10%] mb-[10%] flex flex-col items-center justify-center dark:bg-white">

      <form
        onSubmit={addNewWorkOrder}
        method="POST"
        className="w-full grid grid-cols-2 gap-2">

        <div className="w-full mb-10">
          <h1>Ordem de Serviço:</h1>
          <input
            type="number"
            className="border p-2 rounded"
            value={String(workOrder).padStart(6, '0')}
            readOnly
            required
            onChange={(e) => setWorkOrder(Number(e.target.value))} />
        </div>

        <div className="col-span-2">
          <h2>Nome do Cliente:</h2>
          <input
            type="text"
            className="w-full border p-2 rounded"
            placeholder="Digite o nome"
            required
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>

        <div>
          <h2>Placa:</h2>
          <input
            type="text"
            className="w-full border p-2 rounded"
            required
            value={plate}
            onChange={handleChange}
            placeholder="ABC-1D23" />
        </div>

        <div>
          <h2>Modelo:</h2>
          <input
            type="text"
            className="w-full border p-2 rounded"
            placeholder="Marca/Modelo"
            required
            value={model}
            onChange={(e) => setModel(e.target.value)} />
        </div>

        <div>
          <h2>Data de entrada:</h2>
          <input
            type="date"
            className="w-full border p-2 rounded"
            placeholder="insira a data"
            required
            value={entryDate ? entryDate.toISOString().split('T')[0] : ''}
            onChange={(e) => setEntryDate(new Date(e.target.value))} />
        </div>

        <div>
          <h2>Prazo de entrega:</h2>
          <input
            type="date"
            className="w-full border p-2 rounded"
            required
            value={deliveryDate ? deliveryDate.toISOString().split('T')[0] : ''}
            onChange={(e) => setDeliveryDate(new Date(e.target.value))} />
        </div>

        <div className="col-span-2">
          <h2>Descrição do serviço:</h2>
          <textarea
            name="Digite o tipo de manutenção"
            id=""
            className="border p-2 rounded w-full"
            placeholder="Digite o tipo de manutenção"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div>
          <h2>Orçamento:
            <input
              type="number"
              placeholder="R$"
              className="w-full border p-2 rounded"
              required
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))} />
          </h2>
        </div>
        <div>
          <h2>Valor pago:
            <input
              type="number"
              placeholder="R$"
              className="w-full border p-2 rounded"
              required
              value={paidValue}
              onChange={(e) => setPaidValue(Number(e.target.value))} />
          </h2>
        </div>
        <div className="col-span-2">
          <h2>Funcionário responsável:</h2>
          <select
            className="w-full border p-2 rounded"
            required
            value={mechanic}
            onChange={(e) => setMechanic(e.target.value)}>

            <option value="">Selecione o mecânico</option>
            <option value="Misso">Misso</option>
            <option value="MC Oreia">MC Oreia</option>
          </select>
        </div>

        {successMessage && (
          <div className="mb-4 p-3 text-4xl text-center col-span-2 bg-green-100 text-green-800 rounded">
            {successMessage}
          </div>
        )}

        <input
          className="border rounded mt-8 p-2 bg-red-700 text-white col-span-2 text-center"
          type="submit"
          value="Salvar" />

      </form>
    </div>
  )
}

export default NewWorkOrder