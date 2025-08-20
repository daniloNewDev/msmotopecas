import { useState } from "react";

const CleanAutomotive: React.FC = () => {

  const [plate, setPlate] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    const regex = /^[A-Z]{0,3}( - )?[0-9]?[A-Z]?[0-9]{0,2}$/;

    if (regex.test(value) || value === '') {
      setPlate(value);
    }
  };

  return (
    <div className="w-[80%] ml-[10%] mt-[10%] grid dark:bg-white">
      <form>
        <h1>Placa:</h1>
        <input
          type="text"
          className="w-full border p-2 rounded mb-8"
          value={plate}
          onChange={handleChange}
          placeholder="ABC-1D23" />

        <h1>Veículo:</h1>
        <input
          type="text"
          className="w-full border p-2 rounded mb-8"
          placeholder="Veículo" />

        <h1>Nome do proprietário:</h1>
        <input
          type="text"
          className="w-full border p-2 rounded mb-8"
          placeholder="Digite o nome" />

        <input
          className="border rounded mt-8 p-2 bg-red-700 text-white w-full"
          type="submit"
          value="Salvar" />
      </form>
    </div>
  )

}

export default CleanAutomotive;