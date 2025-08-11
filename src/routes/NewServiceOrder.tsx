import { useState } from "react";

const NewServiceOrder: React.FC = () => {

  const [plate, setPlate] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setPlate(value)
    const regex = /^[A-Z]{0,3}( - )?[0-9]?[A-Z]?[0-9]{0,2}$/;

    if (regex.test(value) || value === '') {
      setPlate(value);
    }
  };

  return (
    <div className="w-[96%] ml-[2%] mt-[10%] mb-[10%] flex flex-col items-center justify-center">
      <div className="w-full mb-10">
        <h1>Ordem de Serviço:</h1>
        <input
          type="number"
          className="border p-2 rounded" />
      </div>

      <form
        action=""
        method="POST"
        className="w-full grid grid-cols-2 gap-2">

        <div className="col-span-2">
          <h2>Nome do Cliente:</h2>
          <input
            type="text"
            className="w-full border p-2 rounded"
            placeholder="Digite o nome"
          />
        </div>

        <div>
          <h2>Placa:</h2>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={plate}
            onChange={handleChange}
            placeholder="ABC-1D23" />
        </div>

        <div>
          <h2>Modelo:</h2>
          <input
            type="text"
            className="w-full border p-2 rounded"
            placeholder="Marca/Modelo" />
        </div>

        <div>
          <h2>Data de entrada:</h2>
          <input
            type="date"
            className="w-full border p-2 rounded"
            placeholder="insira a data" />
        </div>

        <div>
          <h2>Prazo de entrega:</h2>
          <input
            type="date"
            className="w-full border p-2 rounded" />
        </div>

        <div className="col-span-2">
          <h2>Descrição do serviço:</h2>
          <textarea
            name="Digite o tipo de manutenção"
            id=""
            className="border p-2 rounded w-full"
            placeholder="Digite o tipo de manutenção"></textarea>
        </div>
        <div>
          <h2>Orçamento:
            <input
              type="number"
              placeholder="R$"
              className="w-full border p-2 rounded" />
          </h2>
        </div>
        <div>
          <h2>Valor pago:
            <input
              type="number"
              placeholder="R$"
              className="w-full border p-2 rounded" />
          </h2>
        </div>
        <div>
          <h2>Funcionário responsável:</h2>
          <input
            type="text"
            placeholder="Nome do mecânico"
            className="w-full border p-2 rounded" />
        </div>
      </form>
    </div>
  )
}

export default NewServiceOrder