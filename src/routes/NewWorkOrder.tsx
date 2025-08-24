import { useState, useEffect } from "react";
import type { IWorkOrder } from "../components/interfaces/WorkOrders";
import { TextInput, NumberInput, DateInput, SelectInput } from "../components/interfaces/FormInputs";
import api from "../services/api";

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

  const addNewWorkOrder = async (e: React.FormEvent) => {
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
    try {
      const response = await api.post("/workorder", newWorkOrder);
      console.log("Resposta do backend:", response.data);

      setSuccessMessage("Ordem de Serviço salva com sucesso!");
      resetForm();
      setWorkOrder(prev => prev + 1);
    } catch (error) {
      console.error("Erro ao salvar ordem de serviço:", error);
      setSuccessMessage("Erro ao salvar ordem de serviço.");
    }

    setTimeout(() => {
      setSuccessMessage('');
    }, 7000);
  };

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
            value={workOrder}
            readOnly
            required
            onChange={(e) => setWorkOrder(Number(e.target.value))} />
        </div>

        <div className="col-span-2">
          <TextInput
            className="w-full border rounded p-2"
            label="Nome do Cliente"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            required
            placeholder="Digite o nome"
          />
        </div>

        <div>
          <TextInput
            className="w-full border p-2 rounded"
            label="Placa:"
            value={plate}
            onChange={handleChange}
            required
            placeholder="ABC-1D23" />
        </div>

        <div>
          <TextInput
            className="w-full border p-2 rounded"
            label="Modelo:"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
            placeholder="Marca/Modelo" />
        </div>

        <div>
          <DateInput
            label="Data de entrada:"
            value={entryDate}
            className={"w-full border p-2 rounded"}
            onChange={(date) => setEntryDate(date)}
            required
          />
        </div>

        <div>
          <DateInput
            label="Prazo de entrada:"
            value={deliveryDate}
            className={"w-full border p-2 rounded"}
            onChange={(date) => setDeliveryDate(date)}
            required
          />
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
          <NumberInput
            label="Orçamento"
            value={budget}
            className={"border p-2 rounded w-full"}
            onChange={(e) => setBudget(Number(e.target.value))}
            required
            placeholder="R$"
          />
        </div>

        <div>
          <NumberInput
            label="Valor pago:"
            value={paidValue}
            className={"border p-2 rounded w-full"}
            onChange={(e) => setPaidValue(Number(e.target.value))}
            required
            placeholder="R$"
          />
        </div>

        <div className="col-span-2">
          <SelectInput
            label="Funcionário responsável:"
            value={mechanic}
            className={"col-span-2 w-full p-3 border rounded"}
            onChange={(e) => setMechanic(e.target.value)}
            options={["Misso", "MC Favela"]}
            required
          />
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