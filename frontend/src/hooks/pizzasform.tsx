import { useState } from 'react'

export function usePizzaOrder() {
  const [selectedPizzas, setSelectedPizzas] = useState<string[]>([])

  const handleAddPizza = (name: string) => {
    if (!selectedPizzas.includes(name)) {
      setSelectedPizzas([...selectedPizzas, name])
    }
  }

  const showForm = selectedPizzas.length > 0

  return {
    selectedPizzas,
    showForm,
    handleAddPizza
  }
}
